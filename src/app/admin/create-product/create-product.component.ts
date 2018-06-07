import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;
  public productAdded: Boolean = false;

  constructor(private fb: FormBuilder, private http: Http) {
      this.form = fb.group({
          'type': [null, Validators.required],
          'subType': [null, Validators.required],
          'count': [null, Validators.required],
          'name': [null, Validators.required],
          'brand': [null, Validators.required],
          'strings': [null, Validators.required],
          'price': [null, Validators.required]
      });
  }

  ngOnInit() {
  }

  addProduct(data) {
    this.http.post('http://127.0.0.1:3000/addproduct', data).subscribe(res => {
        this.productAdded = true;
    });
  }
}
