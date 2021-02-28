import { GET_POSTS, SET_POSTS } from './actionsTypes';
import { createAction, props } from '@ngrx/store';
import { IPost } from './index';

export const getPosts = createAction(GET_POSTS);

export const setPosts = createAction(
  SET_POSTS,
  props<{ payload: { posts: IPost[] } }>()
);
