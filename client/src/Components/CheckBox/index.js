import React from "react";
import classes from "./checkbox.module.css";

function Checkbox({ setter, value, label }) {
  const isChecked = () => {
    if (Array.isArray(value)) {
      return value.includes(label);
    }
    return value === label;
  };

  const handleChange = () => {
    if (Array.isArray(value)) {
      if (value.includes(label)) {
        setter((prev) => prev.filter((ele) => ele !== label));
      } else {
        setter((prev) => [...prev, label]);
      }
    } else {
      setter(value === label ? "" : label);
    }
  };
  console.log(value, "value");

  return (
    <div className={classes.checkbox}>
      <input type="checkbox" checked={isChecked()} onChange={handleChange} />
      <label>{label}</label>
    </div>
  );
}

export default Checkbox;
