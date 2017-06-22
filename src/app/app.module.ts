import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutesModule } from './routes/routes.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartNotificationComponent } from './shopping-cart-notification/shopping-cart-notification.component';

import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service';
import { StockService } from './stock-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MenuComponent,
    ShoppingCartComponent,
    ShoppingCartNotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [ProductService, ShoppingCartService, StockService],
  bootstrap: [AppComponent, MenuComponent]
})
export class AppModule { }
