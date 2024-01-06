import AddTodo from "./AddTodo";
import { renderWithProviders } from "../utils/utils-for-test";
import { describe, test, afterAll, beforeAll, afterEach, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { setupServer } from 'msw/node';
import { handlers } from "../mocks/handler";
import userEvent from '@testing-library/user-event';
import axios from "axios";

// Hardcode data for testing 
export const todoList = [
  {
    todo: 'Go to Viet Nam',
    created_at: new Date().toLocaleString(),
    id: 1
  }
]
const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

describe('Create lists', () => {
  test('Fetch list', async () => {
    renderWithProviders(<AddTodo />)
    

    await waitFor(() => screen.getByText('Go to Viet Nam'))

    expect(screen.getByText('Go to Viet Nam'))

  })

  test('Create List', async () => {
    renderWithProviders(<AddTodo />)
    const addBtn = screen.getByRole('button', { name: '+' })
    const inputAdd = screen.getByPlaceholderText('Create a new todo...')

    const newPost = {
      todo: 'Learning Web Dev',
      created_at: new Date().toLocaleString(),
      id: 2
    } 

    userEvent.type(inputAdd, newPost.todo)
    userEvent.click(addBtn)

    //await waitFor(() => screen.getByText('Learning Web Dev'))

    //expect(screen.getByText('Learning Web Dev'))

    screen.debug()

    })
})