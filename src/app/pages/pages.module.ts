import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import { SideBarComponent } from '../shared/components/side-bar/side-bar.component';
@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderComponent,
    SideBarComponent
  ]
})
export class PagesModule {
}
