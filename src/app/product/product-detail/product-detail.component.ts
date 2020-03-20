import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../product.service';
import {Product} from '../../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product: Product;
  id;
  sub;
  constructor(private Activatedroute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }


  /* Using snapshot */
  // ngOnInit() {

  //    //This still works but is deprecated
  //    //this.id=this._Activatedroute.snapshot.params['id'];

  //    this.id=this._Activatedroute.snapshot.paramMap.get("id");


  //    let products=this._productService.getProducts();
  //    this.product=products.find(p => p.productID==this.id);
  // }


  /* Using Subscribe */
  ngOnInit() {

    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      const products = this.productService.getProducts3();
      this.product = products.find(p => p.productID == this.id);
    });

    // This params is deprecated

    // this.sub=this._Activatedroute.params.subscribe(params => {
    //    this.id = params['id'];
    //    let products=this._productService.getProducts();
    //    this.product=products.find(p => p.productID==this.id);
    //
    // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['product']);
  }

}
