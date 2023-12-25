import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: []
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.lists.push(
        {
          created: Date.now(),
          todo: action.payload
        })
    },

    deleteTodo: (state, action) => {
      state.lists = state.lists.filter(list => list.id !== action.payload)
    }
  }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer