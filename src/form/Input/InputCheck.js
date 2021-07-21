import React from "react";

const InputCheck = ({ label, name, checked, onChange }) => {
  return (
    <label>
      {label}:{" "}
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

export default InputCheck;
