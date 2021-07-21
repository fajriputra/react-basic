import React from "react";

import { expenses } from "../data";

const ListRendering = () => {
  return expenses.map((item) => {
    return (
      <div
        className="list"
        key={item.id}
        style={{ textAlign: "center", margin: 20 }}
      >
        <div className="title">
          <h4>{item.title}</h4>
        </div>
        <div className="amount">
          <h4>{item.amount}</h4>
        </div>
        <div className="date">
          {item.date.toLocaleString("en-US", { month: "long" })}
          {" - "}
          {item.date.toLocaleString("en-US", { day: "2-digit" })}
          {" - "}
          {item.date.getFullYear()}
        </div>
      </div>
    );
  });
};

export default ListRendering;
