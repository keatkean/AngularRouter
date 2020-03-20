import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private router: Router ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    console.log('canActivate');
    // return true
    // remove comments to return true
    // alert('You are not allowed to view this page. You are redirected to Home Page');
    // this.router.navigate(['contact']);
    return true;
  }

}
