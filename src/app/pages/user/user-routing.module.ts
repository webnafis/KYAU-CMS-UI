import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllUserComponent} from './all-user/all-user.component';
import {AddUserComponent} from './add-user/add-user.component';

const routes: Routes = [
  {path: '', component: AllUserComponent},
  {path: 'add', component: AddUserComponent},
  {path: 'edit/:id', component: AddUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
