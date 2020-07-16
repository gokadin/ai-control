import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { LocalStorageService } from '../../../core/core.module';

import { State } from '../mainState';
import {
  actionProjectCreate,
  actionProjectCreateFailure,
  actionProjectCreateSuccess,
  actionProjectDelete,
  actionProjectDeleteFailure,
  actionProjectDeleteSuccess,
  actionProjectFetch,
  actionProjectFetchFailure,
  actionProjectFetchSuccess
} from './project.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectService } from './project.service';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService,
    private projectService: ProjectService
  ) {}

  retrieveStock = createEffect(() =>
    this.actions$.pipe(
      ofType(actionProjectFetch),
      switchMap(action =>
        this.projectService.fetchProjects().pipe(
          map(projects => actionProjectFetchSuccess({ projects })),
          catchError(error => of(actionProjectFetchFailure({ error })))
        )
      )
    )
  );

  createProject = createEffect(() =>
    this.actions$.pipe(
      ofType(actionProjectCreate),
      switchMap(action =>
        this.projectService.createProject(action.name).pipe(
          map(project => actionProjectCreateSuccess({ project })),
          catchError(error => of(actionProjectCreateFailure({ error })))
        )
      )
    )
  );

  deleteProject = createEffect(() =>
    this.actions$.pipe(
      ofType(actionProjectDelete),
      switchMap(action =>
        this.projectService.deleteProject(action.id).pipe(
          map(result => actionProjectDeleteSuccess({ id: action.id })),
          catchError(error => of(actionProjectDeleteFailure({ error })))
        )
      )
    )
  );
}
