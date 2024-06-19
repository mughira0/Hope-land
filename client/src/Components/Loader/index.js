import React from "react";
import Spinner from "react-bootstrap/Spinner";
import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <>
      <div className={classes.main}>
        <div>
          <Spinner style={{ color: "var(--main-color)" }} animation="grow" />
          <Spinner style={{ color: "var(--main-color)" }} animation="grow" />
          <Spinner style={{ color: "var(--main-color)" }} animation="grow" />
        </div>
      </div>
    </>
  );
};

export default Loader;
