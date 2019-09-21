import React, {useReducer} from 'react';

import './App.css';

// 4 import initialState, todoReducer
import {initialState, todoReducer} from './reducers/todoReducer'

// Todo Actions
// 1 Add todos
// 2 Toggle completed field
// 3 Clear completed todos


function App() {

  // 5 Call useReducer that take in reducer & initial state obj
  const [ state, dispatch ] = useReducer(initialState, todoReducer);
  console.log("TCL: App -> state", state)
 
return (
    <div className="App">
    <h1>Test</h1>
    </div>
  );
}

export default App;
