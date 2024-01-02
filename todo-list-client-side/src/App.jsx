import './App.css'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import sunImgUrl from './images/sun.png';
import todoImgUrl from './images/TODO.png'

function App() {
  return (
    <div className='container'>
      <div className='title-and-mode'>
        <img className='title' src={todoImgUrl} alt="Todo" />
        <img src={sunImgUrl} className="sun-mode" alt='sun-mode'/>
      </div>
      <AddTodo />
     <TodoList />
      <Footer />
    </div>
  );
}

export default App
