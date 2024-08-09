import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { CountActions } from './store/count/count.actions';
import { selectCount } from './store/count/count.selectors';
import { TodoActions } from './store/todo/todo.actions';
import { selectTodo } from './store/todo/todo.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  #store = inject(Store);

  count = this.#store.selectSignal(selectCount);

  todo = this.#store.selectSignal(selectTodo);

  increment() {
    this.#store.dispatch(CountActions.incrementCount());
  }

  loadTodo() {
    this.#store.dispatch(TodoActions.loadTodo({ id: 5 }));
  }
}
