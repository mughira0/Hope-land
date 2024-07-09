import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom/dist";
import { toast } from "react-toastify";

const ProtectedRoute = ({ file, path }) => {
  const isLogin = useSelector((state) => state?.authReducer?.isLogin);
  const Routes = {
    admin: ["/admin-dashboard"],
    seller: ["/seller-dashboard"],
  };
  const { role } = useSelector((state) => state?.authReducer?.user);
  if (isLogin && Routes[role].includes(path)) {
    return file;
  } else if (isLogin && !Routes[role].includes(path)) {
    return [<Navigate to={Routes[role][0]} replace />];
  } else {
    toast.error("Please Login First");
    return <Navigate to="/login" replace />;
  }
  return <></>;
};

export default ProtectedRoute;
