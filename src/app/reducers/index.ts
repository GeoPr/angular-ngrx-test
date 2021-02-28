import { postsReducer } from './postsReducer/index';
import { todosReducer } from './todosReducer/index';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {
  todos: ReturnType<typeof todosReducer>;
  posts: ReturnType<typeof postsReducer>;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
  posts: postsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
