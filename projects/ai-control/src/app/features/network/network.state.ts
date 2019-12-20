import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';
import { projectReducer } from './project/project.reducer';
import { ProjectState } from './project/project.model';

export const FEATURE_NAME = 'network';
export const selectProjects = createFeatureSelector<State, NetworkState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<NetworkState> = {
  project: projectReducer
};

export interface NetworkState {
  project: ProjectState;
}

export interface State extends AppState {
  network: NetworkState;
}
