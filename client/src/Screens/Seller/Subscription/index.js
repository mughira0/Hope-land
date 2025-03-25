import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Get, Post } from "../../../AxiosFunction/AxiosFunction";
import PackageCard from "../../../Components/PackageCard";
import SidebarSkeleton from "../../../Components/SidebarSkeleton";
import { BaseUrl, recordLimit } from "../../../Config/apiUrl";
import PaymentFormModal from "../../../Modals/PaymentFormModal";
import classes from "./Packages.module.css";

function Subscription() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paymentIntentId = searchParams.get("payment_intent");
  const { user, token } = useSelector((state) => state?.authReducer);

  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [paymentModal, setPaymentModal] = useState({
    load: false,
    show: false,
    clientSecret: null,
  });

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
  const handleSuccessPayment = () => {
    setPaymentModal((prev) => ({ ...prev, show: false }));
    const url = BaseUrl(`stripe/subscribe/status/${paymentIntentId}`);
    const response = Get(url, token);

    if (response?.data) {
      toast.success("Payment Successfull");
    }
  };

  const handleOpenPaymentModal = async (item) => {
    setLoading(true);
    setSelectedItem(item);

    const response = await Post(
      BaseUrl(`stripe/subscribe`),
      {
        packageId: item?._id,
        userId: user?._id,
        email: user?.email,
      },
      token
    );

    if (response.data?.data?.clientSecret) {
      setPaymentModal({
        load: false,
        show: true,
        clientSecret: response.data?.data?.clientSecret,
      });
    } else {
      setLoading(false);
      // Handle error
    }

    setLoading(false);
  };

  useEffect(() => {
    setPage(1);
    handleGetPackage(1);
  }, []);

  useEffect(() => {
    if (paymentIntentId) {
      handleSuccessPayment();
    }
  }, [paymentIntentId]);

  return (
    <SidebarSkeleton heading={"Subscription"}>
      <div className={classes.pageMain}>
        <Row>
          {data?.map((item) => (
            <Col lg={4} md={6} sm={12} key={item._id}>
              <PackageCard
                data={item}
                onClick={() => handleOpenPaymentModal(item)}
                type="seller"
              />
            </Col>
          ))}
        </Row>
      </div>
      {paymentModal?.show && (
        <PaymentFormModal
          show={paymentModal?.show}
          setShow={(e) => setPaymentModal({ ...paymentModal, show: e })}
          selectedData={selectedItem}
          clientSecret={paymentModal.clientSecret}
        />
      )}
    </SidebarSkeleton>
  );
}

export default Subscription;
