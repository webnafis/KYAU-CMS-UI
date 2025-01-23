import { Component, Inject } from '@angular/core';
import { CATEGORY_DB } from '../../core/db/categories.db';
import { OUTLET_DB } from '../../core/db/outlets.db';
import { PRODDUCT_DB } from '../../core/db/products.db';
import { Outlet } from '../../interfaces/common/outlet.interface';
import { Product } from '../../interfaces/common/product.interface';
import { Category } from '../../interfaces/common/categories.interface';
import { ProductService } from '../../services/common/product.service';
import { MathService } from '../../services/core/math.service';
import { FirebaseService } from '../../services/core/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public depts: any;

  constructor(
    private firebaseService: FirebaseService,
  ){}


  /**ngOnInit() */

  ngOnInit(){
    this.getAllDept();
  }



  /**FIREBASE HANDLING
   * getAllDepartment()
   */

  private getAllDept(){
    this.firebaseService.getAllDepartments().then( res => {
      this.depts = res;
      console.log(res);
    })
  }















  ngOnDestroy(){
    console.log('page destroy');
    
  }
  

  /**
   * HTTP Request Handling
   * getAllProoducts()
   */

  // private getData(){
  //   this.productService.getAllProducts().subscribe((res:any) => {
  //     console.log(res);
  //     this.allProducts = res;
      
  //   },
  //   error => {
  //     console.log(error);
      
  //   }
  // );
  // }

}