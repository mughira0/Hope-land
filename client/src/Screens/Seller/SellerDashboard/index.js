import React from "react";
import SidebarSkeleton from "../../../Components/SidebarSkeleton";
import classes from "./SellerDashboard.module.css";
function SellerDashboard() {
  return (
    <SidebarSkeleton>
      <div className={classes.page}></div>
    </SidebarSkeleton>
  );
}

export default SellerDashboard;
