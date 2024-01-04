import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  todo: todoReducer
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})

export default store