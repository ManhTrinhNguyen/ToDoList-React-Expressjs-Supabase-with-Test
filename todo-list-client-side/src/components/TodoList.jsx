

// const lists = [
//   {
//     id: 1,
//     todo: 'Learning React'
//   },
//   {
//     id: 2,
//     todo: 'Learnign Redux'
//   },
//   {
//     id: 3,
//     todo: 'Go to Viet Nam'
//   }
// ]

function TodoList(props) {
  return (
    <ul className="lists">
      {
        props.lists.map(list => {
          return <li key={list.id}>{list.text}</li>
        })
      }
      
    </ul>
  )
}

export default TodoList