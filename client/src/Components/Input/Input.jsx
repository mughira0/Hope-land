import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import classes from "./Input.module.css";

const Input = ({
  setter,
  value,
  label,
  type,
  placeholder,
  leftIcon,
  className,
  prop_type,
  multiple,
  disabled = false,
}) => {


  const [open, setOpen] = useState(false);
  return (
    <div className={[classes.inputContainer, className].join(" ")}>
      {type !== "radio" && label && <label>{label}</label>}
      <div className={classes.inputMainWithIcon}>
        {type === "password" && (
          open ? (
            <AiFillEye onClick={() => setOpen(false)} className={classes.eyeicon} />
          ) : (
            <AiFillEyeInvisible onClick={() => setOpen(true)} className={classes.eyeicon} />
          )
        )}
        {type === "radio" ? (
          <div className={classes.radio_div} style={prop_type === label ? {backgroundColor: 'lightblue',width:"10vw",height:"6vh",color:'blue'} : {backgroundColor:'white',width:"10vw",height:"6vh"}}>
            <input
              type="radio"
              id={label}
              disabled={disabled}
              onChange={(e)=>setter(label)}
              checked={prop_type=== label}
              value={value}
            />
            <label htmlFor={label} className={classes.radio_label}>{label}</label>
          </div>
        ): type === "file" ? (
          
          <input
            disabled={disabled}
            onChange={(e)=>setter(e)}
            multiple={multiple}
            style={{ paddingLeft: leftIcon ? "35px" : "10px" }}
            
            type={type}
          />
        ):
        type === "textarea" ?

        (
          <textarea
            className={classes.textsize}
            disabled={disabled}
            onChange={(e)=>setter(e.target.value)}
            value={value}
            style={{ paddingLeft: leftIcon ? "35px" : "10px" }}
            type={"text"}
            />
        ) :
        (
          <input
            disabled={disabled}
            onChange={(e) => setter(e.target.value)}
            value={value}
            style={{ paddingLeft: leftIcon ? "35px" : "10px" }}
            type={type === "password" ? (open ? "text" : "password") : type}
            placeholder={placeholder}
          />
        )}
        <div className={classes.leftIconMain}>{leftIcon}</div>
      </div>
    </div>
  );
};

export default Input;
