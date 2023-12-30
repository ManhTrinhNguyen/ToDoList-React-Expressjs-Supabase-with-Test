import { useState } from "react";
import TodoList from "./TodoList";
function AddTodo() {
  const [todo, setTodo] = useState({
    text: '',
    id: ''
  })
  const [lists, setList] = useState([])

  // Handle Change 
  function handleChange(e) {
    //setTodo(e.target.value)
    setTodo({
      text: e.target.value,
      id: Math.random()
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    setList([...lists, todo])
    setTodo({
      text: '',
      id: ''
    })
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Create a new todo...'
          name='list'
          value={todo.text}
          onChange={handleChange}
          className="input"
        />
        <button className="form-btn" type='submit'>+</button>
      </form>
      <TodoList lists={lists} />
    </>
    
  )
}

export default AddTodo