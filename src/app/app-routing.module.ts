import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>import("./module/home/home.module").then(m=>m.HomeModule)},
  {path:'products',loadChildren:()=>import("./module/product/product.module").then(m=>m.ProductModule) },
  {path:'cart',loadChildren:()=>import("./module/cart/cart.module").then(m=>m.CartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
