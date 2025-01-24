import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeskHistoryRoutingModule } from './desk-history-routing.module';
import { DeskHistoryComponent } from './desk-history/desk-history.component';


@NgModule({
  declarations: [
    DeskHistoryComponent
  ],
  imports: [
    CommonModule,
    DeskHistoryRoutingModule
  ]
})
export class DeskHistoryModule { }
