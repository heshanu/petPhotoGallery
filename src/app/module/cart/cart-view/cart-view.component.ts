import { Component, OnInit } from '@angular/core';
import { CartViewService } from '../../../service/cartView/cart-view.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit{

  constructor(private cartViewService:CartViewService){}
  
  ngOnInit(): void {
    this.getCart();
  }

  cartList:Product[]=[];
  totalPrice:number=0;


  public getCart(){
    this.cartViewService.getCart().subscribe((res:Product[])=>{
      this.cartList=res;
      this.totalPrice=this.getTotalPrice();
    });
  }

  public getTotalPrice():number{
     let total=0;
    this.cartList.forEach((value)=>{
      total+=value.price;
    })

    return total; 
  }

  public clearCart():void{
    this.cartViewService.clearCart().subscribe();
    this.getCart();
  }

  public checkOut():void{
    this.cartViewService.checkOut(this.cartList).subscribe();
    //this.cartViewService.addToCart()
  }


}
