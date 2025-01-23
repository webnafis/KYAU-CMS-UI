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
  public selectedDept: string = 'Not Selectedd';

  constructor(
    private firebaseService: FirebaseService,
  ){}


  /**ngOnInit() */

  ngOnInit(){
    this.getAllDept();
    this.getAllLogsByDept(this.selectedDept);
  }

  public onDeptClick(dept: string){
    this.selectedDept = dept; 
    this.getAllLogsByDept(dept);   
  }


  /**FIREBASE HANDLING
   * getAllDepartment()
   */

  private getAllDept(){
    this.firebaseService.getAllDepartments().then( (res:any) => {
      this.depts = res;
      this.selectedDept = res[0];
      console.log(res);
    })
  }



  private getAllLogsByDept(dept: string){
      this.firebaseService.getLogsArrByDept(dept).then(res => {
        console.log('res------', res);
        
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