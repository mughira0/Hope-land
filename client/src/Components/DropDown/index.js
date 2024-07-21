import React from "react";
import Select from "react-select";
import classes from "./DropDown.module.css";

const DropDown = ({
  option,
  label,
  placeholder,
  setter,
  value,
  isMulti = false,
}) => {

  const handleChange=(selectedOption)=>{
    const selectedvalue = selectedOption

    setter(selectedvalue)
  }
  return (
    <>
      <style>
        {`
        .select__control{
                z-index:2;
                border:none;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                padding: 6px 0px 6px 5px;

        }
        .select__indicator-separator{
                height:4%;
                display:none;
        }
        .select__menu{
            z-index:3;
            background:;
            
        }
        `}
      </style>

      <div className={classes.dropDownMain}>
        {label && <label>{label}</label> }
        <Select
          isMulti={isMulti}
          onChange={handleChange}
          value={value}
          className="basic-single"
          classNamePrefix="select"
          // defaultValue={option[0]}
          name="color"
          options={option}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default DropDown;
