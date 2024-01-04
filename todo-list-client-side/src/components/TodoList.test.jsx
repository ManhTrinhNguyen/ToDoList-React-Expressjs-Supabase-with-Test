import { fireEvent, screen, waitFor } from "@testing-library/react";
import { setupServer } from 'msw/node';
import { beforeAll, afterEach, afterAll, describe, test, expect } from "vitest";
import { handlers } from "../mocks/handler";
import { renderWithProviders } from "../utils/utils-for-test";
import axios from "axios";
import TodoList from "./TodoList";

// Hardcode data for testing 
export const todoList = [
  {
  id: '1',
  todo: 'Go to Viet Nam',
  created_at: new Date().toLocaleString()
  }
]
const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

describe('Todo Lists', () => {
  test('GET should fetch a todo', async () => {
    renderWithProviders(<TodoList />)
  
    await waitFor(() => screen.getByText('Go to Viet Nam'))
    
    expect(screen.getByText('Go to Viet Nam')).toBeInTheDocument()
  })

  test('POST should create a todo', async () => {
    renderWithProviders(<TodoList />)

    const newPost = {
      id: '2',
      todo: 'Learning Web Dev',
      created_at: new Date().toLocaleString()
    }
    
    const { data } = await axios.post('http://localhost:8000/todo', newPost)

    await waitFor(() => screen.getByText('Learning Web Dev'))

    expect(screen.getByText('Learning Web Dev')).toBeInTheDocument()
    expect(todoList.length).toEqual(2)
    
  })
})