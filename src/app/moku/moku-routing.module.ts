import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MokuComponent } from './moku.component';
import { MokuEditComponent } from './moku-edit.component';
import { MokuListComponent } from './moku-list.component';

import { AuthGuard } from '../auth-guard.service';

const mokuRoutes: Routes = [
  {
    path: 'moku',
    component: MokuComponent,
    canActivate: [AuthGuard],
    children: [
      // TODO 2017/05/03 editのルーティングを１つにできないか調査
      {
        path: 'edit/:id',
        component: MokuEditComponent,
      },
      {
        path: 'edit',
        component: MokuEditComponent,
      },
      {
        path: '',
        component: MokuListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mokuRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MokuRoutingModule { }
