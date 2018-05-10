import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GuitarListingComponent } from './guitar-listing/guitar-listing.component';
import { StrapsListingComponent } from './straps-listing/straps-listing.component';
import { PicksListingComponent } from './picks-listing/picks-listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/guitars', pathMatch: 'full' },
  { path: 'guitars', component: GuitarListingComponent },
  { path: 'straps', component: StrapsListingComponent },
  { path: 'picks', component: PicksListingComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
