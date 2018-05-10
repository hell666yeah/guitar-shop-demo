import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-straps-listing',
  templateUrl: './straps-listing.component.html',
  styleUrls: ['./straps-listing.component.scss']
})
export class StrapsListingComponent implements OnInit {
  public productsList: Array<any>;
  public filteredProductsList: Array<any>;
  public filters: Array<string> = ['straps', 'small', 'large'];

  constructor(private http: Http) {this.http.post('http://127.0.0.1:3000/straps', {}).subscribe(data => {
      this.productsList = data.json();
      this.filteredProductsList = this.productsList;
    });
  }

  ngOnInit() {
  }

  public filterChanged(filter) {
    let filteredProducts = [];
    console.log(filter, 'filter');
    if (filter === 'straps') {
        this.filteredProductsList = this.productsList;
    } else {
      this.productsList.forEach(product => {
          if (product.size === filter) {
              filteredProducts.push(product);
          }
      });

      this.filteredProductsList = filteredProducts;
    }
  }

}
