import { Action, createReducer, on } from '@ngrx/store';
import { ProjectState } from './project.model';
import { actionProjectCreate } from './project.actions';

export const initialState: ProjectState = {
  ids: [],
  entities: {}
};

const reducer = createReducer(
  initialState,
  on(actionProjectCreate, state => ({ ...state, ids: state.ids }))
);

export function projectReducer(
  state: ProjectState | undefined,
  action: Action
) {
  return reducer(state, action);
}
