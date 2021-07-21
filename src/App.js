import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import { expenses } from "./data";
import AllEvents from "./event/AllEvents";
import ListRendering from "./rendering/ListRendering";
import State from "./state";
import Uncontrolled from "./form/Uncontrolled";
import Controlled from "./form/Controlled";
import Editing from "./hooks/useEffect";
import CleanUp from "./hooks/useEffect/CleanUp";
import TimeElapsed from "./hooks/useEffect/TimeElapsed";
// import Komponenku from "./hooks/useEffect/Identity";
import Komponenku from "./hooks/useCallback";
import UseMemo from "./hooks/useMemo";
import CounterComp from "./hooks/useReducer";
import Todolist from "./hooks/useReducer/Todolist";

function App() {
  // const addExpenseHandler = (expense) => {
  //   console.log("In App.js");
  //   console.log(expense);
  // };

  return (
    <div className="App">
      {/* <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} /> */}
      {/* <ListRendering /> */}
      {/* <AllEvents /> */}
      {/* <State /> */}
      {/* <Uncontrolled /> */}
      {/* <Controlled /> */}
      {/* <Editing /> */}
      {/* <CleanUp /> */}
      {/* <TimeElapsed /> */}
      {/* <Komponenku /> */}
      {/* <Komponenku /> */}
      {/* <UseMemo /> */}
      {/* <CounterComp /> */}
      <Todolist />
    </div>
  );
}

export default App;
