import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../product.service';
import {Product} from '../../../product';

@Component({
  selector: 'app-product-spec',
  templateUrl: './product-spec.component.html',
  styleUrls: ['./product-spec.component.css']
})
export class ProductSpecComponent implements OnInit, OnDestroy {
  product: Product;
  id;
  sub;

  constructor(private Activatedroute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {

    this.sub = this.Activatedroute.parent.params.subscribe(params => {
      this.id = params.id;
      const products = this.productService.getProducts3();
      this.product = products.find(p => p.productID == this.id);

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
