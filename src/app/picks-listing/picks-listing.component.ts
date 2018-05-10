import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-picks-listing',
  templateUrl: './picks-listing.component.html',
  styleUrls: ['./picks-listing.component.scss']
})
export class PicksListingComponent implements OnInit {
  public productsList: Array<any>;
  public filteredProductsList: Array<any>;
  public filters: Array<string> = ['picks', 'plastic', 'wooden'];

  constructor(private http: Http) {this.http.post('http://127.0.0.1:3000/picks', {}).subscribe(data => {
      this.productsList = data.json();
      this.filteredProductsList = this.productsList;
    });
  }

  ngOnInit() {
  }

  public filterChanged(filter) {
    let filteredProducts = [];
    console.log(filter, 'filter');
    if (filter === 'picks') {
        this.filteredProductsList = this.productsList;
    } else {
        this.productsList.forEach(product => {
            if (product.subCategory === filter) {
                filteredProducts.push(product);
            }
        });

        this.filteredProductsList = filteredProducts;
    }
  }

}
