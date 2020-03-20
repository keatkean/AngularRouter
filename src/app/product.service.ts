import {Product} from './product';
import {from, Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export class ProductService {

  products: Product[];

  public constructor() {
    this.products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100),
      new Product(4, 'Computer', 100),
      new Product(5, 'Laptop', 100),
      new Product(6, 'Printer', 100),
    ];
  }
  public getProducts3() {
    return this.products;
  }
  //
  //
  // public getProduct(id) {
  //   const products: Product[] = this.getProducts();
  //   return products.find(p => p.productID === id);
  // }

  public getProducts(): Observable<Product[]> {
    return of(this.products) ;
  }

  public getProduct(id): Observable<Product> {
    // tslint:disable-next-line:triple-equals
    const Products = this.products.find(i => i.productID == id);
    return of(Products);
  }

  // Return Products List with a delay
  public getProducts2(): Observable<Product[]> {
    return of(this.products).pipe(delay(1500)) ;
  }

  // Returning Error
  // This wil stop the route from getting Activated
  // public getProducts(): Observable<Product[]> {
  //    return of(this.products).pipe(delay(1500), map( data => {
  //        throw throwError("errors occurred") ;
  //    }))
  // }

  public getProduct2(id): Observable<Product> {
    // tslint:disable-next-line:triple-equals
    const Products = this.products.find(i => i.productID == id);
    return of(Products).pipe(delay(1500)) ;
  }
}
