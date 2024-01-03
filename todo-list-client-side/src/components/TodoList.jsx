import { useSelector, useDispatch } from "react-redux"
import { fetchData, deleteData } from "../redux/todoSlice"
import { useEffect } from "react"

function TodoList() {
  const dispatch = useDispatch()
  const lists = useSelector(state => state.todo.lists)
  const status = useSelector(state => state.todo.status)
  const error = useSelector(state => state.todo.error)
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);
 
  function hanleDelete(id) {
    dispatch(deleteData(id))
  }
  
  if (status === 'loading') {
    return <div>Loading ...</div>
  }
  if (status === 'failed') {
    return <div>{error}</div>
  }

  return (
    <ul className="lists">
      {lists?.map(list => (
        <div  key={list.id}>
          <li>{list.todo}</li>
          <button onClick={() => {
            hanleDelete(list.id)
          }}>Delete</button>
        </div>
        
      ))}
    </ul>
  )
}

export default TodoList