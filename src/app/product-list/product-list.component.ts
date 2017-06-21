import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  currentSections:string[] = [];

  constructor(private productService:ProductService, private router : Router) { }

  ngOnInit() {}

  getProducts():Product[] {
    var currentSections = this.getCurrentSections(this.router.url);
    return this.productService.getProducts(currentSections);
  }

  private getCurrentSections(url:string):string[] {
    var result = url.split('/');
    result.shift(); // empty string
    result.shift(); // products path
    return result;
  }

}