import React from "react";
import { TiWarningOutline } from "react-icons/ti";
import Button from "../Button/Button";
import ModalSkeleton from "../ModalSkeleton/ModalSkeleton";
import classes from "./AreYouSureModal.module.css";
const AreYouSureModal = ({
  setShow,
  show,
  onClick,
  apiCall,
  text = "Your want to Delete this!",
}) => {
  return (
    <>
      <ModalSkeleton header={"Are You Sure"} show={show} setShow={setShow}>
        <div className={classes.main}>
          <div>
            <TiWarningOutline size={70} />
          </div>
          <p>{text}</p>
          <div className={classes.btnMain}>
            <Button
              disabled={apiCall}
              onClick={onClick}
              label={apiCall ? "Loading..." : "Yes"}
            />
            <Button onClick={() => setShow(false)} label={"No"} />
          </div>
        </div>
      </ModalSkeleton>
    </>
  );
};

export default AreYouSureModal;
