import { Component } from '@angular/core';
import { CATEGORY_DB } from '../../core/db/categories.db';
import { OUTLET_DB } from '../../core/db/outlets.db';
import { PRODDUCT_DB } from '../../core/db/products.db';
import { Outlet } from '../../interfaces/common/outlet.interface';
import { Product } from '../../interfaces/common/product.interface';
import { Category } from '../../interfaces/common/categories.interface';

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

  ngOnInit(){
    let tprice:number = this.TotalPrice(this.products);
    console.log('Page Initialized');
    console.log('Total Price: ', tprice);
    
  }

  ngOnDestroy(){
    console.log('page destroy');
    
  }
  
}