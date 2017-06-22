import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './../product-list/product-list.component'; 
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';

export const routes : Routes = [
  {path : '', redirectTo : 'products', pathMatch : 'full'},
  {path : 'products', component : ProductListComponent},
  {path : 'products/men', component : ProductListComponent},
  {path : 'products/men/shoes', component : ProductListComponent},
  {path : 'products/men/shoes/running_shoes', component : ProductListComponent},
  {path : 'products/men/apparel', component : ProductListComponent},
  {path : 'products/men/apparel/jackets_vests', component : ProductListComponent},
  {path : 'products/women', component : ProductListComponent},
  {path : 'products/women/accessories', component : ProductListComponent},
  {path : 'products/women/accessories/hats', component : ProductListComponent},
  {path : 'shopping-cart', component : ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
