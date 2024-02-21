import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../service/product/product.service';
import { CartViewService } from '../../../service/cartView/cart-view.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { log } from 'console';

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
    this.sortProducts(this.sortOrder);
  }

  productList:Product[]=[];
  filteredProducts:Product[]=[];
  sortOrder:string='';
  sortHigh:Product[]=[];
  sortLow:Product[]=[];

  public getProducts(){

    this.productService.Products
    this.productList= this.productService.Products
    this.filteredProducts= this.productService.Products

    // this.productService.getProducts().subscribe((prod)=>{
    //   this.productList=prod;
    //   this.filteredProducts=prod
    // });
      
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

  
  public sortProducts(sortValue: string): void {
    this.sortOrder = sortValue;

    if (this.sortOrder === "priceLowToHigh") {
        this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === "priceHighToLow") {
        this.filteredProducts.sort((a, b) => b.price - a.price);
    }
}


}
