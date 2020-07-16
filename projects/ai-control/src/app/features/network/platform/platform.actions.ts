import { createAction, props } from '@ngrx/store';
import { Network } from './network.model';

export const actionNetworkFetch = createAction(
  '[Network] Fetch',
  props<{ projectId: string }>()
);

export const actionNetworkFetchSuccess = createAction(
  '[Network] Fetch Success',
  props<{ network: Network }>()
);

export const actionNetworkFetchFailure = createAction(
  '[Network] Fetch Failure',
  props<{ error? }>()
);
