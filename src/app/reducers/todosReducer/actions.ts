import { createAction, props } from '@ngrx/store';
import { ADD_TODO, REMOVE_TODO } from './actionsTypes';

export const addTodo = createAction(
  ADD_TODO,
  props<{ payload: { title: string } }>()
);

export const removeTodo = createAction(
  REMOVE_TODO,
  props<{ payload: { id: number } }>()
);
