import { createReducer } from '@reduxjs/toolkit'
import { 
  add,
  toggle,
  remove
} from './actions';

export const todosReducer = createReducer([], builder => {
    builder
      .addCase(add, (state, action) => {
        // "mutate" the array by calling push()
        state.push(action.payload)
      })
      .addCase(toggle, (state, action) => {
        const todo = state[action.payload.index]
        // "mutate" the object by overwriting a field
        todo.completed = !todo.completed
      })
      .addCase(remove, (state, action) => {
        // Can still return an immutably-updated value if we want to
        return state.filter((todo, i) => i !== action.payload.index)
      })
  })