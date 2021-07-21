import React from "react";
import Example from "../combine/Example";
import Child from "../combine/Child";

const Parent = ({ author }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Example heading="Example Judul" />
      <Child name={author}>Ini sebagai child dari si parent</Child>
    </div>
  );
};

export default Parent;
