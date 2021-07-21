import React, { useReducer } from "react";

import { reducerTodoList } from "./reducer";

const Todolist = () => {
  const [todo, dispatch] = useReducer(reducerTodoList); // <-- menghubungkan komp dengan reducer
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
          })
        }
      >
        ADD
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_TODO",
          })
        }
      >
        REMOVE
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_TODO",
          })
        }
      >
        REMOVE
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE_COMPLETED",
          })
        }
      >
        TOGGLE_COMPLETED
      </button>
      <br />
      {todo}
      <br />
    </div>
  );
};

export default Todolist;
