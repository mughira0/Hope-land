import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import SidebarSkeleton from "../../../Components/SidebarSkeleton";
import classes from "./Package.module.css";
function Packages() {
  const navigate = useNavigate();
  return (
    <SidebarSkeleton>
      <div className={classes.pageMain}>
        <h1> Package</h1>
        <Button
          label="Add Package"
          onClick={() => navigate("add-edit-package")}
        />
      </div>
    </SidebarSkeleton>
  );
}

export default Packages;
const PackageCard = () => {
  return <div className={classes.card}></div>;
};
