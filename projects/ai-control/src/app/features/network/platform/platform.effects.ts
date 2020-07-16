import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { State } from '../mainState';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  actionNetworkFetch,
  actionNetworkFetchFailure,
  actionNetworkFetchSuccess
} from './platform.actions';
import { PlatformService } from './platform.service';

@Injectable()
export class PlatformEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private platformService: PlatformService
  ) {}

  fetchNetwork = createEffect(() =>
    this.actions$.pipe(
      ofType(actionNetworkFetch),
      switchMap(action =>
        this.platformService.fetchNetwork(action.projectId).pipe(
          map(network => actionNetworkFetchSuccess({ network })),
          catchError(error => of(actionNetworkFetchFailure({ error })))
        )
      )
    )
  );
}
