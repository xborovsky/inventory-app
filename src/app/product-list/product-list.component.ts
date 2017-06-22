import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './../product';
import { ProductService } from './../product.service';
import { ShoppingCartService } from './../shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  currentSections:string[] = [];

  constructor(private productService:ProductService, private router:Router, private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {}

  getProducts():Product[] {
    var currentSections = this.getCurrentSections(this.router.url);
    return this.productService.getProducts(currentSections);
  }

  addItemToCart(item:Product):void {
    item.setTotalItems(item.getTotalItems() - 1);
    this.shoppingCartService.addItem(item);
  }

  private getCurrentSections(url:string):string[] {
    var result = url.split('/');
    result.shift(); // empty string
    result.shift(); // products path
    return result;
  }

}
