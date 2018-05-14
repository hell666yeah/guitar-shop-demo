import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: Array<any> = [];

  constructor(private http: Http) {

  }

  public updateCart(username) {
    let params = {};
    params.product = this.cartItems;
    params.username = username;
    this.http.post('http://127.0.0.1:3000/updatecart', params).subscribe(data => {
       return true;
    }, error => {
        return false;
    });
  }

  public checkout() {
      let action = this.savePurchaseData();
      return action;
  }

  public savePurchaseData(username = 'admin') {
    let params = {};
    params.username = username;
    params.purchaseDetails = username + ' purchased items.';

    this.http.post('http://127.0.0.1:3000/savepurchasedata', params).subscribe(data => {
        this.cartItems = [];
       return true;
    }, error => {
        return false;
    });
  }
}
