export const initialState = {
  todos: [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
        completeBy: new Date("2020-05-12"),
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    //ADD A TODO
    case "ADD_TODO":
      return { todos: [...state.todos, action.todo] };
    //COMPLETED TODO
    case "TOGGLE_COMPLETED":
      let newTodos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          
          todo.completed = !todo.completed;

          return todo;
        }
        return todo;
      });
      return { todos: newTodos };
    //CLEAR COMPLETED TODO
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    //DEFAULT CASE
    default:
      return state;
  }
};
