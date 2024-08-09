import { createActionGroup, props } from '@ngrx/store';
import { Todo } from './todo.types';

export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    'Load Todo': props<{ id: number }>(),
    'Load Todo Success': props<{ todo: Todo }>(),
    'Load Todo Failure': props<{ error: unknown }>(),
  },
});
