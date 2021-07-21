import React from "react";

const Rendering = ({ a, b, c, d, e }) => {
  b = null;
  c = false;
  d = " ";
  e = 0;
  return (
    <>
      <div>a - undefined: {a}</div>
      <div>b - null: {b}</div>
      <div>c - true/false: {c}</div>
      <div>d - empty / white space: {d}</div>
      <div>e - 0: {e}</div>{" "}
    </>
  );
};

export default Rendering;
