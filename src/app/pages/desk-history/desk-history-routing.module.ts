import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeskHistoryComponent } from './desk-history/desk-history.component';

const routes: Routes = [
  {
    path:":department/:desk",
  component:DeskHistoryComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeskHistoryRoutingModule { }
