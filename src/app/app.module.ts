import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './module/product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from './module/cart/cart.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './module/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
    HttpClientModule,
    MatSlideToggleModule,
    MaterialModule,
    HomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
