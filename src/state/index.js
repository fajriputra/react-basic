import React, { useState } from "react";

const State = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prevState) => prevState + 1);
  };
  console.log(number);

  return (
    <div>
      <p>nilai number saat ini adalah: {number}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default State;
