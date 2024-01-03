import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './utils/utils-for-test';
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios';

// Hardcode data testing
const todoData = {
  id: 1,
  created_at: new Date().toLocaleString(),
  todo: 'Learning Redux Toolkit'
}

// mock network request
const mock = new MockAdapter(axios)
const mockNetworkRequest = () => {
  mock.onGet('http://localhost:8000/todo').reply(200, todoData)
};

const unMockNetworkRequests = () => {
  mock.resetHistory();
};

describe('Todo Slice', () => {
  beforeEach(() => {
    mockNetworkRequest()
  });

  afterEach(() => {
    unMockNetworkRequests()
  });

  it('Should fetch todo list', async () => {
    const { data } = await axios.get('http://localhost:8000/todo');
    console.log(data);
    expect(data).toEqual(todoData)

  })
});

