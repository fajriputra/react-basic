export const reducerCounter = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      // logika untuk increment nilai state +1
      return state + 1;

    case "DECREMENT":
      // logika untuk decrement nilai state -1
      return state - 1;

    default:
      return state; // <--- apabila tipe action tidak didukung, kembalikan nilai state saat ini (alias tidak ada perubahan)
  }
};

export const reducerTodoList = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;
      return [...todos, { id: nextId, completed: false, ...action.todo }];
    case "REMOVE_TODO":
      return todos.filter((todo) => todo.id !== action.id);
    case "UPDATE_TODO":
      return todos.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
    case "TOGGLE_COMPLETED":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return todos;
  }
};
