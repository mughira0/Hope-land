import React from "react";
import classes from "./Button.module.css";
import { FaPlus } from "react-icons/fa6";

const Button = ({
  label,
  className,
  onClick,
  disabled,
  customStyle,
  btnType = "cutHover",
  leftIcon
}) => {
  const Icon = leftIcon;
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
        {Icon && <Icon size={25} color="green" />}
        {label}
      </button>
    </>
  );
};

export default Button;
