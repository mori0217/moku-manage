import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MokuComponent } from './moku.component';

import { AuthGuard } from '../auth-guard.service';

const heroesRoutes: Routes = [
  {
    path: 'moku',
    component: MokuComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MokuRoutingModule { }
