import { renderWithProviders } from "./utils/utils-for-test";
import App from "./App";
import { screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";


describe('Test App', () => {
  test('Title Todo and logo in App', () => {
    renderWithProviders(<App />)
    expect(screen.getByAltText('Todo')).toBeInTheDocument()
    expect(screen.getByAltText('sun-mode')).toBeInTheDocument()
  })
  
  test('AddTodo Component in App', () => {
    renderWithProviders(<App />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument();
  })

  test('Footer Component in App', () => {
    renderWithProviders(<App />)
    expect(screen.getByRole('button', { name: 'All'})).toBeInTheDocument()
  })
});

