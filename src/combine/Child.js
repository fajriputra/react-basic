import React from "react";

const Child = ({ name, children }) => {
  return (
    <div>
      {children}
      <br />
      Author by :
      <a
        href="https://www.instagram.com/fjri.p/"
        style={{ textDecoration: "none", marginLeft: 5 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </div>
  );
};

export default Child;
