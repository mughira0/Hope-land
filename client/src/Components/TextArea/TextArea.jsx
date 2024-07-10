import React, { useState } from "react";
import classes from "./TextArea.module.css";
const TextArea = ({
  setter,
  value,
  label,
  type,
  placeholder,
  leftIcon,
  className,
  noOfRow = 4,
}) => {
  const [open, setOpen] = useState("close");
  return (
    <div className={[classes.inputContainer, className].join(" ")}>
      <label>{label && label}</label>
      <div className={classes.inputMainWithIcon}>
        <textarea
          rows={noOfRow}
          onChange={(e) => setter(e.target.value)}
          value={value}
          placeholder={placeholder && placeholder}
        />
        {/* {leftIcon && <img src={leftIcon} />} */}
        <div className={classes.leftIconMain}>{leftIcon}</div>
      </div>
    </div>
  );
};

export default TextArea;
