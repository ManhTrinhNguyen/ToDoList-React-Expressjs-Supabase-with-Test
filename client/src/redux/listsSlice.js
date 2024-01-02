import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  lists: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
} 

// Fetch data 
export const fetchData = createAsyncThunk('lists/fetchLists', async () => {
  try {
    const response = await axios.get('http://localhost:8000/todo')
    return response.data
  } catch (error) {
    console.log(error);
  }
})

const listsSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.lists = action.payload
      })
      .addCase(fetchData.rejected, state => {
        state.status = 'failed'
        state.error = state.error.message
      });
    
  }
})

export default listsSlice.reducer

