import React from "react";

const InputSelect = ({ label, name, value, onChange }) => {
  return (
    <label>
      {label}:
      <select name={name} value={value} onChange={onChange}>
        <option value="Belum Dipilih">Belum Dipilih</option>
        <option value="Food">Food</option>
        <option value="Drink">Drink</option>
      </select>
    </label>
  );
};

export default InputSelect;
