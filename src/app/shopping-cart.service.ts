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
    var idx = 0;
    for (var i=0; i<this.items.length; i++) {
      if (item['id'] === this.items[i]['id']) {
        idx = i;
        break;
      }
    }

    this.items.splice(idx, 1);
    this.updateStorage();
    this.itemsCnt.next(this.items.length);
  }

  getItemsCnt():Observable<number> {
    return this.itemsCnt.asObservable();
  }

  private updateStorage():void {
    sessionStorage.setItem(STORAGE_ID, JSON.stringify(this.items));
  }

}
