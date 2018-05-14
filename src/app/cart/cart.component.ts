import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public shoppingSuccess = false;

  constructor(private http: Http, private cartService: CartService) {

  }

  ngOnInit() {
  }

  public purchase() {
      this.cartService.savePurchaseData(localStorage.getItem('username'));
      this.shoppingSuccess = true;
  }

}
