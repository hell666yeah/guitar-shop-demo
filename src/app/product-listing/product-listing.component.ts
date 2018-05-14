import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  public productsList: Array<any>;
  public filteredProductsList: Array<any>;
  public filters: Array<string> = ['all', 'guitars', 'straps', 'picks'];

  constructor(private http: Http, private cartService: CartService) {
      this.http.post('http://127.0.0.1:3000/allproducts', {}).subscribe(data => {
        this.productsList = data.json();
        this.filteredProductsList = this.productsList;
      });
  }

  ngOnInit() {
  }

  public filterChanged(filter) {
      let filteredProducts = [];
      if (filter === 'all') {
          this.filteredProductsList = this.productsList;
      } else {
        this.productsList.forEach(product => {
            if (product.type === filter) {
                filteredProducts.push(product);
            }
        });

        this.filteredProductsList = filteredProducts;
      }
  }

  addToCart(product) {
      let username = localStorage.getItem('username');
      console.log(username, 'username');
      this.cartService.cartItems.push(product);
      let status = this.cartService.updateCart(username);
      if(status) {
        alert('Item has been added to cart');
      } else {
        alert('Unable to add product to cart.');
      }
  }
