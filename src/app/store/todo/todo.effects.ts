import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodoActions } from './todo.actions';
import { Todo } from './todo.types';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodo),
      switchMap(({ id }) =>
        this.httpClient.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(
          map((todo) => TodoActions.loadTodoSuccess({ todo })),
          catchError((error) => of(TodoActions.loadTodoFailure({ error }))),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
  ) {}
}
