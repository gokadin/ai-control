import { createSelector } from '@ngrx/store';
import { selectMainState } from '../mainState';
import { networkAdapter } from './platform.reducer';

const { selectAll } = networkAdapter.getSelectors();

export const selectNetworkState = createSelector(
  selectMainState,
  state => state.network
);

export const selectNetwork = createSelector(
  selectNetworkState,
  state => state.current
);
