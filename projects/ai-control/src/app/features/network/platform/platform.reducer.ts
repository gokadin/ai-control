import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Network, NetworkState } from './network.model';
import { actionNetworkFetchSuccess } from './platform.actions';

export const networkAdapter: EntityAdapter<Network> = createEntityAdapter<
  Network
>();

export const initialState: NetworkState = networkAdapter.getInitialState({
  current: undefined
});

const reducer = createReducer(
  initialState,
  on(actionNetworkFetchSuccess, (state, payload) => {
    return networkAdapter.addOne(payload.network, {
      ...state,
      current: payload.network
    });
  })
);

export function networkReducer(
  state: NetworkState | undefined,
  action: Action
) {
  return reducer(state, action);
}
