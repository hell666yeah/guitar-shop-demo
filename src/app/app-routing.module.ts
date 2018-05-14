import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { StrapsListingComponent } from './straps-listing/straps-listing.component';
import { PicksListingComponent } from './picks-listing/picks-listing.component';
import { GuitarListingComponent } from './guitar-listing/guitar-listing.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListingComponent },
  { path: 'guitars', component: GuitarListingComponent },
  { path: 'straps', component: StrapsListingComponent },
  { path: 'picks', component: PicksListingComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
