import { createAction, props } from '@ngrx/store';
import { Project } from './project.model';

export const actionProjectCreate = createAction(
  '[Project] Create',
  props<{ project: Project }>()
);

export const actionProjectDelete = createAction(
  '[Project] Delete',
  props<{ id: string }>()
);
