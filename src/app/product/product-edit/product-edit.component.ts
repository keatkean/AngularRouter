import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../product.service';
import {Product} from '../../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute ) {
  }


  ngOnInit() {

    const id = this.route.snapshot.params.id;

    this.productService.getProduct(id)
      .subscribe(data => {
        this.product = data;
      });
  }

}
