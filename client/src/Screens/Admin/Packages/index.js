import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { SlOptions } from "react-icons/sl";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { Delete, Get } from "../../../AxiosFunction/AxiosFunction";
import AreYouSureModal from "../../../Components/AreYouSureModal";
import Button from "../../../Components/Button/Button";
import SimplePopper from "../../../Components/Popper";
import SidebarSkeleton from "../../../Components/SidebarSkeleton";
import TableSkeletons from "../../../Components/TableSkeleton";
import { BaseUrl, recordLimit } from "../../../Config/apiUrl";
import classes from "./Package.module.css";

function Packages() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state?.authReducer);
  const tableHead = ["#", "Name", "Year", "Students ", "Status", "Action"];
  const tableWidth = ["10%", "25%", "20%", "17%", "20%", "18%"];
  const [selectedItem, setSelectedItem] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(Boolean(anchorEl));
  const [deleteModal, setDeleteModal] = useState({ open: false, load: false });
  const [filter, setFilter] = useState(null);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    if (!isOpen) {
      setIsOpen((prevOpen) => !prevOpen);
    }
  };

  const handleAction = (item) => {
    if (item == "Edit") {
      navigate("/add-edit-package", { state: { id: selectedItem?._id } });
    }
    if (item == "Delete") {
      setDeleteModal((prev) => ({ ...prev, open: true }));
    }
  };
  const handleDelete = async () => {
    setDeleteModal((prev) => ({ ...prev, load: true }));
    const response = await Delete(
      BaseUrl(`admin/packages/${selectedItem?._id}`),
      token
    );
    if (response?.data) {
      setData((prev) => prev?.filter((e) => e?._id != selectedItem?._id));
      setDeleteModal((prev) => ({ ...prev, load: false, open: false }));
      toast.success("Package Deleted Successfully");
    }
    setDeleteModal((prev) => ({ ...prev, load: false }));
  };
  const handleGetPackage = async (pageNo = page) => {
    setLoading(true);
    const response = await Get(
      BaseUrl(`admin/packages?limit=${recordLimit}&page=${pageNo}`),
      token
    );
    if (response?.data) {
      setData(response?.data?.packages);
    }
    setLoading(false);
  };
  useEffect(() => {
    setPage(1);
    handleGetPackage(1);
  }, []);
  return (
    <SidebarSkeleton heading={"Packages"}>
      <div className={classes.pageMain}>
        <div className={classes.header}>
          <Button
            label={"Add Package"}
            onClick={() => {
              navigate("/add-edit-package");
            }}
          />
        </div>
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className={classes.tableMain}
        >
          <div className={classes.table}>
            <Table responsive>
              <thead>
                <tr>
                  {tableHead?.map((head, index) => (
                    <th style={{ width: tableWidth[index] }} key={index}>
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <TableSkeletons colCount={6} rowsCount={5} />
                ) : (
                  data.map((ele, index) => (
                    <tr key={index}>
                      <td style={{ width: tableWidth[0] }}>{index + 1}</td>
                      <td style={{ width: tableWidth[1] }}>{ele?.name}</td>
                      <td style={{ width: tableWidth[2] }}>{ele?.year}</td>
                      <td style={{ width: tableWidth[3] }}>
                        {ele?.students?.length}
                      </td>
                      <td style={{ width: tableWidth[4] }}>{ele?.status}</td>
                      <td style={{ width: tableWidth[5] }}>
                        <SlOptions
                          onClick={(event) => {
                            setSelectedItem(ele);
                            handleClick(event);
                          }}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
            <SimplePopper
              options={["Edit", "Delete"]}
              open={isOpen}
              anchorEl={anchorEl}
              handleClick={handleAction}
            />
          </div>
        </div>
      </div>

      {deleteModal?.open && (
        <AreYouSureModal
          show={deleteModal?.open}
          setShow={(e) => {
            setDeleteModal((prev) => ({ ...prev, open: e }));
          }}
          apiCall={deleteModal?.load}
          onClick={handleDelete}
        />
      )}
    </SidebarSkeleton>
  );
}

export default Packages;
