import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MokuRoutingModule } from './moku-routing.module';
import { MokuComponent } from './moku.component';
import { MokuService } from './moku.service';
import { MokuEditComponent } from './moku-edit.component';
import { MokuListComponent } from './moku-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MokuRoutingModule,
  ],
  declarations: [
    MokuComponent,
    MokuEditComponent,
    MokuListComponent,
  ],
  providers: [
    MokuService,
  ]
})
export class MokuModule { }
