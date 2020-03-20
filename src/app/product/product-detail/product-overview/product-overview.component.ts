import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../product.service';
import {Product} from '../../../product';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit, OnDestroy {
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
