import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('App - Test Img', () => {
    render(<App />);

    const todoImg = screen.getByAltText('Todo')
    const sunImg = screen.getByAltText('sun-mode')

    expect(todoImg).toBeInTheDocument();
    expect(sunImg).toBeInTheDocument()
  })
  it('App - Render Test Form In The Document', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Create a new todo...')
    const btn = screen.getByRole('button', {
      name: '+'
    })
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  })
  it('App - Render Test Footer In the Document', () => {
    render(<App />)
    const allBtn = screen.getByRole('button', {
      name: 'All'
    })
    expect(allBtn).toBeInTheDocument();
  })
})
