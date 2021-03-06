const todos = (state = [], action) => {
  switch (action.type) {
    case "INIT_TODO":
      return action.todos
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          complete: action.complete,
          text: action.text
        }
      ];
    case "REMOVE_TODO":
      return state.filter(e => e.id !== action.id)
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    default:
      return state;
  }
};
export default todos;
