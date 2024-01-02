import { useState } from "react";
import { postData } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  
  const dispatch = useDispatch()
  
  const [todo, setTodo] = useState('')
  // Handle Change 
  function handleChange(e) {
    setTodo(e.target.value)
  }

function handleSubmit(e) {
    e.preventDefault();
    dispatch(postData(todo))
    setTodo('')
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Create a new todo...'
          name='list'
          value={todo}
          onChange={handleChange}
          className="input"
        />
        <button className="form-btn" type='submit'>+</button>
      </form>
    </>
    
  )
}

export default AddTodo