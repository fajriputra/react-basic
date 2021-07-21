import React from "react";

const InputText = ({ label, name, value, onChange }) => {
  return (
    <label>
      {label} :{" "}
      <input name={name} type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default InputText;
