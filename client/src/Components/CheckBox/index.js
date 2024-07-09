import React from "react";

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
    setter(label);
    handleValue();
  };
  const handleValue = () => {
    if (Array?.isArray(value)) {
      return value?.includes(label);
    }
    return value;
  };

  return (
    <div>
      <input
        type="checkbox"
        label={label}
        value={handleValue}
        onChange={() => handleChange()}
      />
    </div>
  );
}

export default Checkbox;
