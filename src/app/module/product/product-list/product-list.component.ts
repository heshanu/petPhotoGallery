import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../service/product/product.service';
import { CartViewService } from '../../../service/cartView/cart-view.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService:ProductService,
    private cardViewService:CartViewService,
    private snackBar:MatSnackBar
    ){}

  ngOnInit(): void {
    this.getProducts();
  }

  productList:Product[]=[];

  public getProducts(){
    this.productService.getProducts().subscribe((prod)=>{
      this.productList=prod;
    });
   // console.log(this.productList);
  }

  public addToCart(product:Product):void{
    this.cardViewService.addToCart(product).subscribe({
      next:()=>{
          this.snackBar.open("Added to Cart");
      }
    });

  }
}
