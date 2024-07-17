import React from "react";
import SidebarSkeleton from "../../../Components/SidebarSkeleton";
import classes from "./SellerDashboard.module.css";
import Properties from "../Properties";
function SellerDashboard({page}) {
  return (
    <SidebarSkeleton>
      <div className={classes.page}>{page}</div>
    </SidebarSkeleton>
  );
}

export default SellerDashboard;
