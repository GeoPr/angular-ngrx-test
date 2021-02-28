import { setPosts } from './actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface IPost {
  title: string;
  body: string;
  id: number;
  userId: number;
}

type InitalState = IPost[];

const initalState: InitalState = [];

const reducer = createReducer(
  initalState,

  // get posts
  on(setPosts, (state, action) => {
    const { posts } = action.payload;
    return posts;
  })
);

export const postsReducer = (
  state: InitalState = initalState,
  action: Action
) => reducer(state, action);
