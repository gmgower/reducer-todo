import React, {useState} from 'react'

const TodoForm = (props) => {
    console.log("TCL: TodoForm -> props", props)

    const {addTodo, clearTodo} = props;
    
    const [item, setItem] = useState('');
    
    const handleChange = e => setItem(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(item)
        setItem('')
    }
    
    const handleClear = e => {
        e.preventDefault();
        clearTodo();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='item'
                    value={item}
                    onChange={handleChange}
                    placeholder="Add item"
                    />    
                    <button type="submit">Add Todo</button>
                    <button onClick={handleClear}>Clear Todo(s)</button>
            </form>      
        </div>
    )
}

export default TodoForm
