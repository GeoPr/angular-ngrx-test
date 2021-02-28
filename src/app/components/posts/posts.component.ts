import { getPosts } from './../../reducers/postsReducer/actions';
import { AppState } from './../../reducers/index';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts = this.store.pipe(select(store => store.posts));

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {}

  getPosts() {
    this.store.dispatch(getPosts());
  }
}
