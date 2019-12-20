import { EntityState } from '@ngrx/entity';

export interface Project {
  id: string;
  name: string;
}

export interface ProjectState extends EntityState<Project> {}
