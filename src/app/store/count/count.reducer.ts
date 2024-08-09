import { createFeature, createReducer, on } from '@ngrx/store';
import { CountActions } from './count.actions';
// import { CountActions } from './count.actions';

export const countFeatureKey = 'count';

export interface State {
  count: number;
  dummy: string;
}

export const initialState: State = {
  count: 0,
  dummy: '...',
};

export const reducer = createReducer(
  initialState,
  on(CountActions.incrementCount, (state) => ({ ...state, count: state.count + 1 })),
);

export const countFeature = createFeature({
  name: countFeatureKey,
  reducer,
});
