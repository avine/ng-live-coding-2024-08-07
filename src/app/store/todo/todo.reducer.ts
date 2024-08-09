import { createFeature, createReducer, on } from '@ngrx/store';
import { TodoActions } from './todo.actions';
import { Todo } from './todo.types';

export const todoFeatureKey = 'todo';

export interface State {
  todo: Todo | undefined;
}

export const initialState: State = {
  todo: undefined,
};

export const reducer = createReducer(
  initialState,
  on(TodoActions.loadTodoSuccess, (state, { todo }) => ({ ...state, todo })),
  //on(TodoActions.loadTodosFailure, (state, action) => state),
);

export const todoFeature = createFeature({
  name: todoFeatureKey,
  reducer,
});
