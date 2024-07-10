import React from "react";
import classes from "./checkbox.module.css";
function Checkbox({ setter, value, label }) {
  const handleChange = () => {
    if (Array?.isArray(value)) {
      if (value?.includes(label)) {
        setter((prev) => prev?.filter((ele) => ele !== label));

        handleValue();
        return;
      } else {
        setter((prev) => [...prev, label]);
        handleValue();
        return;
      }
    }
    setter((prev) => (prev ? "" : label));
    handleValue();
  };
  const handleValue = () => {
    if (Array?.isArray(value)) {
      return value?.includes(label);
    }
    return value;
  };

  return (
    <div className={classes.checkbox}>
      <input
        type="checkbox"
        label={label}
        value={handleValue}
        onChange={() => handleChange()}
      />
      <label>{label}</label>
    </div>
  );
}

export default Checkbox;
