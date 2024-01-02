import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/listsSlice";
import { useEffect } from "react";

function Lists() {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists.lists)

  useEffect(() => {
    const getLists = async () => {
      return await dispatch(fetchData())
    };
    getLists()
  }, [dispatch]);

  return (
    <ul className="lists">
      {lists.map(list => (
        <li key={list.id}>{ list.todo }</li>
      ))}
    </ul>
  )
}

export default Lists