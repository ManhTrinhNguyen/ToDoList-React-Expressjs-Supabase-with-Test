import todoReducer from './todoSlice'
import { describe, test, expect } from 'vitest'
import { initialState } from './todoSlice';

describe('Search Todo Lists', () => {
  
  test('should return initial State', () => {
    expect(todoReducer(undefined, {})).toEqual(initialState)
  })
  
  test('it should hanlde a todo being added to an empty list', () => {
    expect(todoReducer(initialState, {}))
   })
});