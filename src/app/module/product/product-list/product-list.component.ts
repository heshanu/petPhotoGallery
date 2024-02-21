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
  filteredProducts:Product[]=[];

  public getProducts(){
    this.productService.getProducts().subscribe((prod)=>{
      this.productList=prod;
      this.filteredProducts=prod
    });
   // console.log(this.productList);
  }

  public addToCart(product:Product):void{
    this.cardViewService.addToCart(product).subscribe({
      next:()=>{
          this.snackBar.open("Added to Cart","",{
            duration:2000,
            horizontalPosition:'right',
            verticalPosition:'top'
          });
      }
    });
    
  }

  public applyFilter(event:Event):void{
    let searchTerm=(event.target as HTMLInputElement).value;
    searchTerm=searchTerm.toLocaleLowerCase();

    this.filteredProducts=this.productList.filter(
      product=>product.name.toLocaleLowerCase().includes(searchTerm));

  }

}
