const initialState = [];

const Redux = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { ...action.payload, completed: false }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, name: action.payload.name } : todo
      );
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default Redux;
