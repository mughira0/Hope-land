import React from "react";
import classes from "./Button.module.css";
const Button = ({
  label,
  className,
  onClick,
  disabled,
  customStyle,
  btnType = "cutHov",
}) => {
  return (
    <>
      <button
        style={customStyle}
        disabled={disabled}
        onClick={onClick}
        className={[
          btnType == "cutHover" ? classes.cutHover : classes.normal,
          className && className,
        ].join(" ")}
      >
        {label && label}
      </button>
    </>
  );
};

export default Button;
