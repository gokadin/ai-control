import { Action, createReducer, on } from '@ngrx/store';
import { Project, ProjectState } from './project.model';
import {
  actionProjectCreateSuccess,
  actionProjectDeleteSuccess,
  actionProjectFetchSuccess
} from './project.actions';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const projectAdapter: EntityAdapter<Project> = createEntityAdapter<
  Project
>();

export const initialState: ProjectState = projectAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(actionProjectCreateSuccess, (state, payload) =>
    projectAdapter.addOne(payload.project, state)
  ),
  on(actionProjectFetchSuccess, (state, payload) =>
    projectAdapter.addAll(payload.projects, state)
  ),
  on(actionProjectDeleteSuccess, (state, payload) =>
    projectAdapter.removeOne(payload.id, state)
  )
);

export function projectReducer(
  state: ProjectState | undefined,
  action: Action
) {
  return reducer(state, action);
}
