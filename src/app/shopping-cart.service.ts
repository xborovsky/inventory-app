import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject' ;
import { Observable } from 'rxjs/Observable'; 

import { Product } from './product';

const STORAGE_ID:string = "shopping-cart";

@Injectable()
export class ShoppingCartService {

  items : Product[] = [];
  itemsCnt : Subject<number> = new Subject<number>();

  constructor() { 
    this.items = this.getShoppingCart() || [];
  }

  getShoppingCart() : Product[] {
    return JSON.parse(sessionStorage.getItem(STORAGE_ID));;
  }

  addItem(item:Product):void {
    this.items.push(item);
    this.updateStorage();
    this.itemsCnt.next(this.items.length);

  }

  removeItem(item:Product):void {
    // TODO
  }

  getItemsCnt():Observable<number> {
    return this.itemsCnt.asObservable();
  }

  private updateStorage():void {
    sessionStorage.setItem(STORAGE_ID, JSON.stringify(this.items));
  }

}
