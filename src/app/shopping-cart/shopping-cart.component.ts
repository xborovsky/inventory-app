import { Component, OnInit } from '@angular/core';

import { Product } from './../product';
import { ShoppingCartItem } from './../shopping-cart-item';
import { ShoppingCartService } from './../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart : ShoppingCartItem[] = [];

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
    this.aggregateItemsInCart();
  }

  removeItem(item:ShoppingCartItem):void {
    this.shoppingCartService.removeItem(item.getProduct());
    this.aggregateItemsInCart();
  }

  private aggregateItemsInCart() {
    this.shoppingCart = [];
    this.shoppingCartService.getShoppingCart().forEach(product => {
      var productInCart = this.shoppingCart.filter(function(item) {
        return item.getProduct()['id'] === product['id'];
      });
      if (productInCart && productInCart.length) {
        productInCart[0].increaseQuantity();
      } else {
        this.shoppingCart.push(new ShoppingCartItem(product, 1));
      }
    });
  }

}
