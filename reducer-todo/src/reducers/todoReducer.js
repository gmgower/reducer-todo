// 1 Build initial state
export const initialState = {
  // 3 Build initial state object
  todoArray: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
};

// 2 Build initial reducer
export const todoReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todoArray: [...state.todoArray, newTodo] // state.todoArray.concat(newTodo)
      };

    default:
      return state;
  }
};
