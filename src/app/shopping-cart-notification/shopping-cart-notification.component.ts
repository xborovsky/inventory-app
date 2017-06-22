import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-notification',
  templateUrl: './shopping-cart-notification.component.html',
  styleUrls: ['./shopping-cart-notification.component.css']
})
export class ShoppingCartNotificationComponent implements OnInit {

  itemsCnt:number = 0;

  constructor(private shoppingCartService : ShoppingCartService) {}

  ngOnInit() {
    this.shoppingCartService.getItemsCnt().subscribe((itemsCnt : number) => this.itemsCnt = itemsCnt);
  }

  getTitle():string {
    switch (this.itemsCnt) {
      case 0 : return 'No items in cart.';
      case 1 : return '1 item in cart.';
      default : return this.itemsCnt + ' items in cart.';
    }
  }
}
