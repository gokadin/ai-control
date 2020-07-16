import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';
import { projectReducer } from './project/project.reducer';
import { ProjectState } from './project/project.model';
import { NetworkState } from './platform/network.model';
import { networkReducer } from './platform/platform.reducer';

export const FEATURE_NAME = 'network';
export const selectMainState = createFeatureSelector<State, MainState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<MainState> = {
  project: projectReducer,
  network: networkReducer
};

export interface MainState {
  project: ProjectState;
  network: NetworkState;
}

export interface State extends AppState {
  network: MainState;
}
