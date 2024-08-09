import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCount from './count.reducer';

export const selectCountState = createFeatureSelector<fromCount.State>(fromCount.countFeatureKey);

export const selectCount = createSelector(selectCountState, ({ count }) => count);
