import {Injectable} from '@angular/core';
import {ProductService} from './product.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Product} from './product';
import {Observable} from 'rxjs';

@Injectable()
export class ProductListResolverService implements Resolve<Product> {

  constructor(private productService: ProductService ) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {

    console.log('ProductListResolver is called');
    return this.productService.getProducts2();
  }

}
