import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../redux/todoSlice"
import { useEffect } from "react"

function TodoList() {
  const dispatch = useDispatch()
  const lists = useSelector(state => state.todo.lists)
  const status = useSelector(state => state.todo.status)
  const error = useSelector(state => state.todo.error)

  useEffect(() => {

    dispatch(fetchData())
    
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading ...</div>
  }
  if (status === 'failed') {
    return <div>{error}</div>
  }

  return (
    <ul className="lists">
      {lists.map(list => (
        <li key={list.id}>{ list.todo }</li>
      ))}
    </ul>
  )
}

export default TodoList