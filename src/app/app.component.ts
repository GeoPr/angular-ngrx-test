import { addTodo, removeTodo } from './reducers/todosReducer/actions';
import { AppState } from './reducers/index';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos = this.store.pipe(select('todos'));
  title = '';

  constructor(public store: Store<AppState>) {}

  addTodo() {
    this.store.dispatch(addTodo({ payload: { title: this.title } }));
    this.title = '';
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ payload: { id } }));
  }
}
