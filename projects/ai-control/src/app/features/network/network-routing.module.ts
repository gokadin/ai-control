import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/components/project.component';
import { PlatformComponent } from './platform/components/platform.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: ':projectId/platform',
    component: PlatformComponent,
    children: [
      {
        path: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule {}
