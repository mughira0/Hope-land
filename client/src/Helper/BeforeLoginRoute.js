import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom/dist";

const BeforeLoginRoute = ({ file }) => {
  const isLogin = useSelector((state) => state?.authReducer?.isLogin);
  const { role } = useSelector((state) => state?.authReducer?.user || {});
  const handleRoute = () => {
    if (role === "admin") {
      return "/admin-dashboard";
    } else if (role === "seller") {
      return "/seller-dashboard";
    } else {
      return "/";
    }
  };
  if (isLogin) {
    return <Navigate to={handleRoute()} replace />;
  } else {
    return file;
  }
  return <></>;
};

export default BeforeLoginRoute;
