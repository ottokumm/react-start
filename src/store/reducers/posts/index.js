import { createReducer } from '@reduxjs/toolkit';
import {
  add,
  fetch,
} from './actions';

export const posts = createReducer([], (builder) => {
  builder
    .addCase(add, (state, action) => {
      state.push(action.payload);
    })
    .addCase(fetch.fulfilled, (state, action) => {
      state.concat(action.payload);
    });
});
