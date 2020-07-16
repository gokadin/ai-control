import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LazyElementsModule } from '@angular-extensions/elements';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';

import { NetworkRoutingModule } from './network-routing.module';
import { ProjectEffects } from './project/project.effects';
import { ProjectComponent } from './project/components/project.component';
import { FEATURE_NAME, reducers } from './mainState';
import { MatTableModule } from '@angular/material/table';
import { ProjectService } from './project/project.service';
import { NewProjectDialog } from './project/components/newProjectDialog';
import { MatDialogModule } from '@angular/material/dialog';
import { PlatformComponent } from './platform/components/platform.component';
import { PlatformService } from './platform/platform.service';
import { PlatformEffects } from './platform/platform.effects';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/examples/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LazyElementsModule,
    SharedModule,
    NetworkRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([ProjectEffects, PlatformEffects]),
    MatTableModule,
    MatDialogModule
  ],
  declarations: [ProjectComponent, NewProjectDialog, PlatformComponent],
  entryComponents: [NewProjectDialog],
  providers: [ProjectService, PlatformService]
})
export class NetworkModule {
  constructor() {}
}
