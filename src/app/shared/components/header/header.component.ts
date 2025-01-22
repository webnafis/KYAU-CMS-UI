import {Component, OnDestroy, OnInit} from '@angular/core';
import {Admin} from '../../../interfaces/common/admin.interface';
import {AdminService} from '../../../services/common/admin.service';
import {Subscription} from 'rxjs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { Category } from '../../../interfaces/common/categories.interface';
import { CATEGORY_DB } from '../../../core/db/categories.db';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterLink,
    MatMenuModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public categories: Category[]= CATEGORY_DB;

  // Store Data
  admin: Admin = null;

  // Subscriptions
  private subDataOne: Subscription;


  constructor(
    private adminService: AdminService
  ) {
  }

  ngOnInit() {
    this.getLoggedInAdminData();
    console.log(this.categories);
    

  }

  /**
   * HTTP Req Handle
   * getLoggedInAdminData()
   * adminLogOut()
   */
  private getLoggedInAdminData() {
    const select = 'username profileImg role'
    this.subDataOne = this.adminService.getLoggedInAdminData(select)
      .subscribe({
        next: res => {
          this.admin = res.data;
        },
        error: err => {
          console.log(err)
        }
      })
  }

  adminLogOut() {
    this.adminService.adminLogOut();
  }


  /**
   * ON DESTROY
   */

  ngOnDestroy() {
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }
}
