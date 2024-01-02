import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { it, describe, expect } from "vitest";
import AddTodo from "./AddTodo";

describe('Add ToDo', () => {
  it('Should render correctly', () => {
    render(<AddTodo />)
    screen.debug()
    const input = screen.getByRole('textbox');
    const submitBtn = screen.getByRole('button', {
      name: '+'
    })
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('')
    expect(submitBtn).toBeInTheDocument();
  });

  it('Should list the todos submited', async () => {
    const user = userEvent.setup();

    render(<AddTodo />)
    const input = screen.getByRole('textbox');
    const submitBtn = screen.getByRole('button', {
      name: '+'
    })

    await user.type(input, 'Do Homework')
    await user.click(submitBtn)

    await user.type(input, "walk the dog");
    await user.click(submitBtn);


    const todos = screen.getAllByRole('listitem')
    
    expect(todos[0]).toHaveTextContent('Do Homework')

    expect(todos[1]).toHaveTextContent('walk the dog')

    expect(todos.length).toEqual(2)
  });
});