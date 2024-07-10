import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Patch, Post } from "../../../AxiosFunction/AxiosFunction";
import Button from "../../../Components/Button/Button";
import Checkbox from "../../../Components/CheckBox";
import DropDown from "../../../Components/DropDown";
import Input from "../../../Components/Input/Input";
import SidebarSkeleton from "../../../Components/SidebarSkeleton";
import TextArea from "../../../Components/TextArea/TextArea";
import { BaseUrl } from "../../../Config/apiUrl";
import classes from "./AddEditPackage.module.css";

function AddEditPackage() {
  const { token } = useSelector((state) => state?.authReducer);
  const [packageId, setPackageId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [type, setType] = useState(null);
  const [description, setDescription] = useState("");
  const [recurringType, setRecurringType] = useState(null);
  const [price, setPrice] = useState(0);
  const [includePermission, setIncludePermission] = useState([]);
  const { id } = location?.state || {};

  useEffect(() => {
    if (id) {
      handleGetPackage();
    }
  }, [id]);
  const handleAddEditPackage = async () => {
    const apiUrl = BaseUrl(
      id ? "admin/packages/update" : "admin/packages/create"
    );
    const body = {
      ...(id && { packageId }),
      title,
      description,
      type: type?.value,
      recurringType: type?.value == "basic" ? "none" : recurringType?.value,
      price,
      permissions: includePermission,
    };
    const response = id
      ? await Patch(apiUrl, body, token)
      : await Post(apiUrl, body, token);
    if (response) {
      toast.success(`Packages ${id ? "updated" : "added"} successfully`);
      navigate("/packages");
    }
  };
  const handleGetPackage = () => {};

  const permissions = ["Unlimited-Property-Creation", "5 Listings Boosters"];

  return (
    <SidebarSkeleton>
      <div className={classes.pageMain}>
        <h1>{id ? "Edit" : "Create"} Package</h1>
        <Row>
          <Col md={6}>
            <div className={classes.box}>
              <DropDown
                setter={(e) => {
                  if (e?.value == "basic") {
                    setPrice(0);
                    setRecurringType({ label: "None", value: "none" });
                  }
                  if (e?.value == "basic") {
                    setRecurringType(null);
                  }
                  setType(e);
                }}
                label="Type"
                option={[
                  { label: "Basic", value: "basic" },
                  { label: "Standard", value: "Standard" },
                ]}
                value={type}
              />
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.box}>
              <Input setter={setTitle} label="Title" value={title} />
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.box}>
              <Input
                type="number"
                disabled={type?.value == "basic"}
                setter={setPrice}
                label="Price"
                value={price}
              />
            </div>
          </Col>
          {type?.value != "basic" && (
            <Col md={6}>
              <div className={classes.box}>
                <DropDown
                  setter={setRecurringType}
                  placeholder={"Select Recurring Type"}
                  label="Recurring Type"
                  disabled={type?.value == "basic"}
                  option={[
                    { label: "Monthly", value: "monthly" },
                    { label: "Yearly", value: "yearly" },
                    { label: "None", value: "none" },
                  ]}
                  value={recurringType}
                />
              </div>
            </Col>
          )}
          <Col md={12}>
            <div className={classes.box}>
              <TextArea
                setter={setDescription}
                label="Description"
                value={description}
              />
            </div>
          </Col>

          <Col md={12}>
            <div className={classes.box}>
              <h4> Permissions </h4>
              {permissions?.map((permission, index) => (
                <div key={index} className={classes.permissionBox}>
                  <Checkbox
                    setter={setIncludePermission}
                    label={permission}
                    value={includePermission}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <div className={classes.buttonMain}>
          <Button label="Submit" onClick={() => handleAddEditPackage()} />
        </div>
      </div>
    </SidebarSkeleton>
  );
}

export default AddEditPackage;
