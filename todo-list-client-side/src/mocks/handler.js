import { http, HttpResponse, delay } from "msw"
import { todoList } from "../components/TodoList.test"

//  We use msw to intercept the network request during the test,
// and return the response To Do List after 150ms
// when receiving a get request to the `http://localhost:8000/todo` endpoint
export const handlers = [
  http.get('http://localhost:8000/todo', async () => {
    await delay(150)
    return HttpResponse.json(todoList)
  }),
  http.post('http://localhost:8000/todo', async ({request}) => {
    const newList = await request.json();

    todoList.push(newList)

    return HttpResponse.json(newList, { status : 201 })
  })
]