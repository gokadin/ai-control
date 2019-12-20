import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

import { LocalStorageService } from '../../../core/core.module';

import { State } from '../network.state';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService
  ) {}
}
