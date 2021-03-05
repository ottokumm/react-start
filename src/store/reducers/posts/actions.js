import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { postsAPI } from 'services/api';

const ROOT = 'todo';
const createActionName = (name) => `${ROOT}/${name}`;

export const fetch = createAsyncThunk(createActionName('fetch'), async () => {
  const response = await postsAPI.getPosts();
  return response.data;
});

export const add = createAction(createActionName('add'), (text) => ({
  payload: text,
}));

export const toggle = createAction(createActionName('toggle'), (index) => ({
  payload: index,
}));

export const remove = createAction(createActionName('remove'), (index) => ({
  payload: index,
}));
