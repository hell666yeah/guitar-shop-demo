import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GuitarListingComponent } from './guitar-listing/guitar-listing.component';
import { StrapsListingComponent } from './straps-listing/straps-listing.component';
import { PicksListingComponent } from './picks-listing/picks-listing.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    GuitarListingComponent,
    StrapsListingComponent,
    PicksListingComponent,
    NavigationComponent
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
