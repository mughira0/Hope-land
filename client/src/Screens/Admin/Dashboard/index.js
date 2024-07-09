import React from "react";
import classes from "./AdminDashboard.module.css";
import SidebarSkeleton from "../../../Components/SidebarSkeleton";
function AdminDashboard() {
  return (
    <SidebarSkeleton>
      <div className={classes.pageMain}>
        <h1>Admin Dashboard</h1>
      </div>
    </SidebarSkeleton>
  );
}

export default AdminDashboard;
