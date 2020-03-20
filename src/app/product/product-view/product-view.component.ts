import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../product.service';
import {Product} from '../../product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

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
