import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartViewComponent } from './cart-view/cart-view.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class CartModule { }
