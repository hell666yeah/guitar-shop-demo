import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-guitar-listing',
  templateUrl: './guitar-listing.component.html',
  styleUrls: ['./guitar-listing.component.scss']
})
export class GuitarListingComponent implements OnInit {
  public productsList: Array<any>;
  public filteredProductsList: Array<any>;
  public filters: Array<string> = ['guitars', 'acoustic', 'electric'];

  constructor(private http: Http, private cartService: CartService) {
    this.http.post('http://127.0.0.1:3000/guitars', {}).subscribe(data => {
      this.productsList = data.json();
      this.filteredProductsList = this.productsList;
    });
  }

  ngOnInit() {
  }

  public filterChanged(filter) {
    let filteredProducts = [];
    console.log(filter, 'filter');
    if (filter === 'guitars') {
        this.filteredProductsList = this.productsList;
    } else {
        this.productsList.forEach(product => {
            if (product.subType === filter) {
                filteredProducts.push(product);
            }
        });

        this.filteredProductsList = filteredProducts;
    }
  }

  addToCart(product) {
      this.cartService.cartItems.push(product);
      alert('Item has been added to cart');
  }

  }
