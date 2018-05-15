import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CartService } from '../services/cart/cart.service';
import { AuthenticateService } from '../services/authenticate/authenticate.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public shoppingSuccess = false;

  constructor(private http: Http, private cartService: CartService, private authenticateService: AuthenticateService) {

  }

  ngOnInit() {
  }

  public purchase() {
      console.log(this.authenticateService.username, 'this.authenticateService.username');
      this.cartService.savePurchaseData(this.authenticateService.username);
      this.shoppingSuccess = true;
  }

}
