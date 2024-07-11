import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Role.module.css";
function Role({ setStepper, setRole }) {
  return (
    <Container>
      <div className={classes.main}>
        <div
          className={classes.left}
          onClick={() => {
            setRole("customer");
            setStepper("Form");
          }}
        >
          <p>Customer</p>
        </div>
        <div
          className={classes.right}
          onClick={() => {
            setRole("seller");
            setStepper("Form");
          }}
        >
          <p>Seller</p>
        </div>
      </div>
    </Container>
  );
}

export default Role;
