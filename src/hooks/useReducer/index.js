import React, { useReducer } from "react";

/*
Reducer merupakan sebuah fungsi yang menerima dua parameter yaitu state saat ini dan action. State bukanlah hasil dari penggunaan dari useState, secara konsep memang sama-sama state tetapi ini dua hal yang terpisah.

Penggunaan reducer lebih disukai ketika kita memerlukan pengelolaan state yang lebih kompleks daripada ketika menggunakan hook useState.
*/

import { reducerCounter } from "./reducer";

// parameter pertama yaitu fungsi reducer untuk menangani logic
// parameter kedua yaitu nilai awal state pada reducer

const CounterComp = () => {
  const [counter, dispatch] = useReducer(reducerCounter, 0); // <-- menghubungkan komp dengan reducer

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
      <br />
      {counter}
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
    </div>
  );
};

export default CounterComp;
