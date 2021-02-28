import { HttpClient } from '@angular/common/http';
import { GET_POSTS } from './actionsTypes';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setPosts } from './actions';
import { IPost } from './index';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5;';

@Injectable({ providedIn: 'root' })
export class PostsEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GET_POSTS),
      mergeMap(() => {
        return this.http.get<IPost[]>(url).pipe(
          map((posts) => {
            return setPosts({ payload: { posts } });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
