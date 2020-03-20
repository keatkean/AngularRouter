import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import {ProductService} from './product.service';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductOverviewComponent } from './product/product-detail/product-overview/product-overview.component';
import { ProductSpecComponent } from './product/product-detail/product-spec/product-spec.component';
import {FormsModule} from '@angular/forms';
import {ProductGuardService} from './product/product-guard.service';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { RegisterComponent } from './register/register.component';
import {DeactivateGuard} from './deactivate-guard.service';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import {ProductListResolverService} from './product-list-resolver.service';
import { StaticComponent } from './static/static.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent,
    ProductDetailComponent,
    ProductOverviewComponent,
    ProductSpecComponent,
    LoginComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductViewComponent,
    RegisterComponent,
    Product1Component,
    Product2Component,
    StaticComponent,
    DynamicComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [ ProductService, ProductGuardService, AuthService, AuthGuardService, DeactivateGuard, ProductListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
