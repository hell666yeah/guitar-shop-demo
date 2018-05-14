import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { StrapsListingComponent } from './straps-listing/straps-listing.component';
import { PicksListingComponent } from './picks-listing/picks-listing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GuitarListingComponent } from './guitar-listing/guitar-listing.component';
import { CartService } from './services/cart/cart.service';
import { AuthenticateService } from './services/authenticate/authenticate.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    StrapsListingComponent,
    PicksListingComponent,
    NavigationComponent,
    GuitarListingComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CartService, AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
