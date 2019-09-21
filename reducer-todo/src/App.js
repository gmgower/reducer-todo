import React, {useReducer} from 'react';

import './App.css';

// 4 import initialState, todoReducer
import {initialState, todoReducer} from './reducers/todoReducer.js'

import TodoForm from './components/TodoForm.js'

// Todo Actions
// 1 Add todos
// 2 Toggle completed field
// 3 Clear completed todos


function App() {
  // 5 Call useReducer that take in reducer & initial state obj
  const [ state, dispatch ] = useReducer(todoReducer, initialState );
  console.log("TCL: App -> dispatch", dispatch)
  console.log("TCL: App -> state", state)

  const addTodo = item => {
    dispatch({type: "ADD_TODO", payload: item})
  }

return (
    <div className="App">
    <h1>Todos</h1>
    <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
