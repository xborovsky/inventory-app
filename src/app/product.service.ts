import { Injectable } from '@angular/core';

import { Product } from './product';

import { StockService } from './stock-service.service';

@Injectable()
export class ProductService {

  private products:Product[] = [];

  constructor(private stockService:StockService) {
    var product1 = this.makeProduct(1, 'Black running shoes', 109.99, 'assets/img/shoes1.jpg', 'MYSHOES', ['Men', 'Shoes', 'Running shoes']);
    var product2 = this.makeProduct(2, 'Blue jacket', 238.99, 'assets/img/blue_jacket.jpg', 'NEATOJACKET', ['Men', 'Apparel', 'Jackets & Vests']);
    var product3 = this.makeProduct(3, 'Black hat', 29.99, 'assets/img/black_hat.jpg', 'NICEHAT', ['Women', 'Accessories', 'Hats']);
    var product4 = this.makeProduct(4, 'Nice running shoes', 149.99, 'assets/img/shoes2.jpg', 'NICESHOES', ['Men', 'Shoes', 'Running shoes']);
    var product5 = this.makeProduct(5, 'Bracelet', 9.99, 'assets/img/bracelet.jpg', 'MYBRACELET', ['Women', 'Accessories', 'Bracelets']);

    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
    this.products.push(product4);
    this.products.push(product5);
  }

  getProducts(sections):Product[] {
    let filteredProducts:Product[] = [];
    this.products.forEach(product => {
      if (this.containsAll(sections, product.getSection())) {
        filteredProducts.push(product);
      }
    });
    return filteredProducts;
  }

  getAllSections():String[][] {
    var ret;
    for (var i=0; i<this.products.length; i++) {
      ret.push(this.products[i].getSection());
    }
    return ret;
  }

  private makeProduct(id:number, name:string, price:number, iconSrc:string, sku:string, section:string[]):Product {
    var product = new Product();
    product.setId(id);
    product.setName(name);
    product.setPrice(price);
    product.setIconSrc(iconSrc);
    product.setSku(sku);
    product.setSection(section);
    product.setTotalItems(this.stockService.checkItemsLeftOnStock(id));
    return product;
  }

  private containsAll(arr1, arr2):boolean { // todo underscore?
    arr1 = arr1.map(element => element.toLowerCase());
    arr2 = arr2.map(element => element.toLowerCase().replace(/ +/g, '_').replace('&', '_').replace(/_+/g, '_')); // todo better?

    for(var i = 0; i < arr1.length; i++){
      if(arr2.indexOf(arr1[i]) === -1)
        return false;
    }
    return true;
  } 

}