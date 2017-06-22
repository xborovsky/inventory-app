import { Injectable } from '@angular/core';

import { Stock, StockItem } from './stock';
import { Product } from './product';

import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class StockService {

  stock:Stock;
  private shoppingCartItems : Product[];

  constructor(private shoppingCartService:ShoppingCartService) {
    let si1:StockItem = new StockItem(1, 5);
    let si2:StockItem = new StockItem(2, 8);
    let si3:StockItem = new StockItem(3, 2);
    let si4:StockItem = new StockItem(4, 4);
    let si5:StockItem = new StockItem(5, 5);

    this.stock = new Stock([si1, si2, si3, si4, si5]);
    this.shoppingCartItems = this.shoppingCartService.getShoppingCart();
  }

  checkItemsLeftOnStock(id:number):number {
    let stockItem = this.stock.getItems().find((item:StockItem) => {
      return item['itemId'] === id;
    });

    if (!this.shoppingCartItems) {
      return stockItem.getQuantity();
    }

    let shoppingCartItems = this.shoppingCartItems.filter((item:Product) => {
      return item['id'] === id;
    });

    return stockItem.getQuantity() - shoppingCartItems.length;
  }

}
