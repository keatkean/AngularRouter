import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {Observable} from 'rxjs';

@Injectable()
export class DeactivateGuard implements CanDeactivate<any> {
  // component: RegisterComponent;
  route: ActivatedRouteSnapshot;

  constructor() {
  }

  canDeactivate(component: IDeactivateComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.canExit ? component.canExit() : true;

  }

}

export interface IDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}
