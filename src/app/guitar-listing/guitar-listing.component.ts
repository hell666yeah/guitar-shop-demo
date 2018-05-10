import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-guitar-listing',
  templateUrl: './guitar-listing.component.html',
  styleUrls: ['./guitar-listing.component.scss']
})
export class GuitarListingComponent implements OnInit {
  public productsList: Array<any>;
  public filteredProductsList: Array<any>;
  public filters: Array<string> = ['guitars', 'acoustic', 'electric', 'strap', 'pick'];

  constructor(private http: Http) {
      // this.productsList = [
      //     {
      //       name: 'Guitar 1',
      //       brand: 'Yamaha',
      //       type: 'electric',
      //       serialNumber: '1',
      //       strings: '6',
      //       price: '$100',
      //       count: 25
      //     },
      //     {
      //       name: 'Guitar 1',
      //       brand: 'Ibanez',
      //       type: 'electric',
      //       serialNumber: '2',
      //       strings: '12',
      //       price: '$200',
      //       count: 501
      //     },
      //     {
      //       name: 'Guitar 1',
      //       brand: 'Santanio',
      //       type: 'acoustic',
      //       serialNumber: '3',
      //       strings: '6',
      //       price: '$75',
      //       count: 329
      //     }
      // ];
      // this.filteredProductsList = this.productsList;

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
