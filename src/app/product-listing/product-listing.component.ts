import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  public productsList: Array<any>;
  public filteredProductsList: Array<any>;
  public filters: Array<string> = ['guitars', 'acoustic', 'electric', 'straps', 'pick'];

  constructor(private http: Http) {
      this.http.post('http://127.0.0.1:3000/allproducts', {}).subscribe(data => {
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
            if (product.type === filter) {
                filteredProducts.push(product);
            }
        });

        this.filteredProductsList = filteredProducts;
      }
  }

}
