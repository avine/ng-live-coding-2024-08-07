import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from './todo.reducer';

export const selectTodoState = createFeatureSelector<fromTodo.State>(fromTodo.todoFeatureKey);

export const selectTodo = createSelector(selectTodoState, ({ todo }) => todo);
