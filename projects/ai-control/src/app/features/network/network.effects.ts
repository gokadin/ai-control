import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

import { TitleService, AppState } from '../../core/core.module';

@Injectable()
export class NetworkEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private translateService: TranslateService,
    private router: Router,
    private titleService: TitleService
  ) {}
}
