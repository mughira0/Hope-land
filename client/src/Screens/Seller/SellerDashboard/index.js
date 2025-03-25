import React from "react";
import SidebarSkeleton from "../../../Components/SidebarSkeleton";
import classes from "./SellerDashboard.module.css";
import Properties from "../Properties";
function SellerDashboard({file}) {
  return (
    <SidebarSkeleton>
      <div className={classes.page}><Properties /></div>
    </SidebarSkeleton>
  );
}

export default SellerDashboard;
