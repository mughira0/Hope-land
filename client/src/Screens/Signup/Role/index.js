import React from "react";
import classes from "./Role.module.css";
function Role({ setStepper, setRole }) {
  return (
    <div className={classes.main}>
      <div
        className={classes.left}
        onClick={() => {
          setRole("Customer");
          setStepper("Signup");
        }}
      >
        <p>Customer</p>
      </div>
      <div
        className={classes.right}
        onClick={() => {
          setRole("Seller");
          setStepper("Signup");
        }}
      >
        <p>Seller</p>
      </div>
    </div>
  );
}

export default Role;
