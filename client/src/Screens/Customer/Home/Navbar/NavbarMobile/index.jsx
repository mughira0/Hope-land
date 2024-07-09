import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../../../../../Components/Button/Button";
import classes from "./index.module.css";

function index() {
  const burger = <GiHamburgerMenu />;
  const cust_style = {
    backgroundColor: "transparent",
    color: "black",
    fontSize: "larger",
    width: "5%",
    height: "8vh",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <h3>Hope Land</h3>
      </div>

      <Button label={<GiHamburgerMenu />} customStyle={cust_style} />
    </div>
  );
}

export default index;
