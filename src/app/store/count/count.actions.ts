import { createActionGroup, emptyProps } from '@ngrx/store';

export const CountActions = createActionGroup({
  source: 'Count',
  events: {
    'Increment Count': emptyProps(),
  },
});
