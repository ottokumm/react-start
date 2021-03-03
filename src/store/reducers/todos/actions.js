import { createAction } from '@reduxjs/toolkit'

const ROOT = 'todo';
const createActionName = (name) => `${ROOT}/${name}`;

export const add = createAction(createActionName('add'), (text) => {
    return {
        payload: text
    };
})

export const toggle = createAction(createActionName('toggle'), (index) => {
    return {
        payload: index
    };
})

export const remove = createAction(createActionName('remove'), (index) => {
    return {
        payload: index
    };
})