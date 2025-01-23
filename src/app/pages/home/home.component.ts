import { Component, Inject } from '@angular/core';
import { CATEGORY_DB } from '../../core/db/categories.db';
import { OUTLET_DB } from '../../core/db/outlets.db';
import { PRODDUCT_DB } from '../../core/db/products.db';
import { Outlet } from '../../interfaces/common/outlet.interface';
import { Product } from '../../interfaces/common/product.interface';
import { Category } from '../../interfaces/common/categories.interface';
import { ProductService } from '../../services/common/product.service';
import { MathService } from '../../services/core/math.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // title = 'nafis-portfolio';

  public products: Product[] = PRODDUCT_DB;
  public categories: Category[]= CATEGORY_DB;
  public outlets: Outlet[]= OUTLET_DB;
  public totalPrice: number = 0;

  public allProducts: any[];

  public onLikeToggle(item: Product){
    console.log('clicked', item);
    this.products.map(m => {
     if(m.id === item.id){
      m.price = m.price+1;
     }
    })
  }

  private TotalPrice(product:Product[]){
    var p = 0;

    product.map(m => {
      p = p + m.price;
    })

    console.log(product);


    product.forEach(m => {
      if(m?.id === 1){
        m.name = 'chagla';
      }
    })

    // product.find(m => m.id == 1){
    //   m.name = 
    // }

    console.log(product);
    
    
    return p;
  }



  // Check if the object contains only one property (name)
  isOnlyNameProperty(item: any): boolean {
    return Object.keys(item).length === 1 && item.hasOwnProperty('name');
  }

  constructor(
    private productService: ProductService,
    private mathService: MathService
  ){}

  // private mathService = Inject(MathService);

  ngOnInit(){
    // this.getAllProducts();
    let tprice:number = this.TotalPrice(this.products);
    console.log('Page Initialized');
    console.log('Total Price: ', tprice);

    let sum = this.mathService.sum(6, 6);
    console.log(sum);    
    this.getData();
  }

  ngOnDestroy(){
    console.log('page destroy');
    
  }
  

  /**
   * HTTP Request Handling
   * getAllProoducts()
   */

  private getData(){
    this.productService.getAllProducts().subscribe((res:any) => {
      console.log(res);
      this.allProducts = res;
      
    },
    error => {
      console.log(error);
      
    }
  );
  }

}