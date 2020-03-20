import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ErrorComponent} from './error/error.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductOverviewComponent} from './product/product-detail/product-overview/product-overview.component';
import {ProductSpecComponent} from './product/product-detail/product-spec/product-spec.component';
import {ProductGuardService} from './product/product-guard.service';
import {AuthGuardService} from './auth-guard.service';
import {LoginComponent} from './login/login.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ProductViewComponent} from './product/product-view/product-view.component';
import {ProductAddComponent} from './product/product-add/product-add.component';
import {RegisterComponent} from './register/register.component';
import {DeactivateGuard} from './deactivate-guard.service';
import {Product1Component} from './product1/product1.component';
import {Product2Component} from './product2/product2.component';
import {ProductListResolverService} from './product-list-resolver.service';
import {DynamicComponent} from './dynamic/dynamic.component';
import {StaticComponent} from './static/static.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'static', component: StaticComponent, data : { id: '1', name: 'Angular'}},
  { path: 'dynamic', component: DynamicComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent},
  { path: 'product1', component: Product1Component },
  { path: 'product2', component: Product2Component, resolve: {products: ProductListResolverService}  },
  // tslint:disable-next-line:max-line-length
  { path: 'product', component: ProductComponent, canActivate : [ AuthGuardService], canActivateChild : [AuthGuardService],
    children: [
      {  path: 'view/:id', component: ProductViewComponent  },
      {  path: 'edit/:id', component: ProductEditComponent  },
      {  path: 'add', component: ProductAddComponent },
      { path: 'detail/:id', component: ProductDetailComponent, children : [
          { path: 'overview', component: ProductOverviewComponent },
          { path: 'spec', component: ProductSpecComponent },

          { path: '', redirectTo: 'overview', pathMatch: 'full' }
        ] }
    ]
  },
  { path: 'register', component: RegisterComponent, canDeactivate: [DeactivateGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
