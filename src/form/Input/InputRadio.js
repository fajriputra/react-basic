import React from "react";

const InputRadio = ({ label, name, checked, onChange }) => {
  return (
    <label>
      {label}:
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
      />{" "}
      Male
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
      />{" "}
      Female
    </label>
  );
};

export default InputRadio;
