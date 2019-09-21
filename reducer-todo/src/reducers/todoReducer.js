// 1 Build initial state
export const initialState = {

    // 3 Build initial state object
     todoArray: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
          }
        ],
}

// 2 Build initial reducer 
export const todoReducer  = (state, action) => {
console.log(state, action)





    return state;
}