import React, { useState } from "react";
import Card from "../../UI/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const [titlee, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle("updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titlee}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>change title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
