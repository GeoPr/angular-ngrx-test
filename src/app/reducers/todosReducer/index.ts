import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './actions';

interface ITodo {
  title: string;
  id: number;
}

type InitalState = ITodo[];
const initalState: InitalState = [];

const reducer = createReducer(
  initalState,

  // add todo
  on(actions.addTodo, (state, { payload: { title } }) => [
    ...state,
    { title, id: Date.now() },
  ]),

  // remove todo
  on(actions.removeTodo, (state, action) => {
    const { id } = action.payload;
    return state.filter(todo => todo.id !== id);
  })
);

export const todosReducer = (
  state: InitalState = initalState,
  action: Action
) => reducer(state, action);
