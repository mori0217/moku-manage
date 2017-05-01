import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MokuComponent } from './moku.component';

import { MokuRoutingModule } from './moku-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MokuRoutingModule,
  ],
  declarations: [
    MokuComponent,
  ]
})
export class MokuModule { }
