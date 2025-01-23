import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const PRODUCT_URL = 'https://jsonplaceholder.typicode.com/posts'


@Injectable({
  providedIn: 'root'
})
// get -> recieve
// post -> add/edit
// del -> remove



export class MathService{
    
    constructor(
        private httpClient: HttpClient
    ){};

    sum(a:number, b:number){
        return a+b;
    }

    getData(){
       return this.httpClient.get(PRODUCT_URL);        
    }
}