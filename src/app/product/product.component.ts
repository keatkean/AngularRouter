import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  pageNo = 0;
  snapshotPageNo = 0;

  constructor(private productService: ProductService, private Activatedroute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
      });
    // this.products = this.productService.getProducts();
    //  the following code works but is DEPRECATED
    //  this.snapshotPageNo =this.Activatedroute.snapshot.queryParams['pageNum']||0;

    //  this.Activatedroute.queryParams
    //       .subscribe(params => {
    //         this.pageNo = +params['pageNum']||0;
    //         console.log('Query params ',this.pageNo)
    //       });


    // this.snapshotPageNo = +this.Activatedroute.snapshot.queryParamMap.get('pageNum') || 0;
    //
    //
    // this.Activatedroute.queryParamMap
    //   .subscribe(params => {
    //     this.pageNo = +params.get('pageNum') || 0;
    //     console.log('Query params ', this.pageNo);
    //   });
  }

  nextPage() {
    this.router.navigate(['product'], { queryParams: { pageNum: this.pageNo + 1 }} );
  }
}
