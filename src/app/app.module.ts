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

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    StrapsListingComponent,
    PicksListingComponent,
    NavigationComponent,
    GuitarListingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
