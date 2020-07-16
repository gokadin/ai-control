import { createAction, props } from '@ngrx/store';
import { Project } from './project.model';

export const actionProjectFetch = createAction('[Project] Fetch', props<{}>());

export const actionProjectFetchSuccess = createAction(
  '[Project] Fetch Success',
  props<{ projects: Project[] }>()
);

export const actionProjectFetchFailure = createAction(
  '[Project] Fetch Failure',
  props<{ error? }>()
);

export const actionProjectCreate = createAction(
  '[Project] Create',
  props<{ name: string }>()
);

export const actionProjectCreateSuccess = createAction(
  '[Project] Create Success',
  props<{ project: Project }>()
);

export const actionProjectCreateFailure = createAction(
  '[Project] Create Failure',
  props<{ error? }>()
);

export const actionProjectDelete = createAction(
  '[Project] Delete',
  props<{ id: string }>()
);

export const actionProjectDeleteSuccess = createAction(
  '[Project] Delete Success',
  props<{ id: string }>()
);

export const actionProjectDeleteFailure = createAction(
  '[Project] Delete Failure',
  props<{ error? }>()
);
