import { todosReducer } from './todosReducer/index';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {
  todos: ReturnType<typeof todosReducer>;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
