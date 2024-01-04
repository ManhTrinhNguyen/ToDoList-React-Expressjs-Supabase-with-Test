import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const initialState = {
  lists: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
}

// Async thunk for fetching data
export const fetchData = createAsyncThunk('todo/fetchTodo', async () => {
  try {
    const response = await axios.get('http://localhost:8000/todo')
    return response.data
  } catch (error) {
    console.log(error)
  }
  
})

// Add Data to database
export const postData = createAsyncThunk('todo/addTodo', async (text) => {
  const data = {
    todo: text, 
    created_at: new Date().toLocaleString()
  }
  try {
    const response = await axios.post('http://localhost:8000/todo', data)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

// Delete Data

export const deleteDataApi = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8000/todo/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteData = createAsyncThunk('todo/deleteTodo', async (id) => {
  try {
    await deleteDataApi(id)
    return id
  } catch (error) {
    console.log(error)
  }
})



export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.lists = action.payload
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })

      // Post data case
      .addCase(postData.pending, state => {
        state.status = 'loading'
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.lists.push(...action.payload)
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
      
      // Delete data case 
      .addCase(deleteData.pending, state => {
        state.status = 'loading'
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.status = 'succeeded',
        state.lists.filter(list => list.id !== action.payload)
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
  }
});

export const { getTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer