import { createSelector } from '@ngrx/store';
import { selectMainState } from '../mainState';
import { projectAdapter } from './project.reducer';

const { selectAll } = projectAdapter.getSelectors();

export const selectProjectState = createSelector(
  selectMainState,
  state => state.project
);

export const selectProjects = createSelector(
  selectProjectState,
  selectAll
);
