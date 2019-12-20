import { ProjectState } from './project.model';

export const selectProjectIds = (state: ProjectState) => state.ids;
export const selectProjectEntities = (state: ProjectState) => state.entities;
