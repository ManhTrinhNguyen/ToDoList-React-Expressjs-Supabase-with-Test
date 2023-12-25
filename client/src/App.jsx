import { useState } from 'react'
import './App.css'


function App() {

  const [list, setList] = useState('')

  function handleChange(e) {
    setList(e.target.value)
  }

  return (
    <div className='container'>
      <div className='title-and-mode'>
        <h1 className='title'>Title</h1>
        <img src="/sun.png" className="sun-mode" alt='sun-mode'/>
      </div>
      <form>
        <input
          type='text'
          placeholder='Create a new todo...'
          name='list'
          value={list}
          onChange={handleChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default App;
