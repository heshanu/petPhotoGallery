import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartViewService {

  constructor(private http:HttpClient) { }

  private apiUrl=environment.apiUrl+"/cart";
  private apiCheckOutUrl=environment.apiUrl+"/checkout";

  public getCart():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  public addToCart(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl,product);
  }

  public clearCart():Observable<void>{
    return this.http.delete<void>(this.apiUrl);
  }

  public checkOut(products:Product[]):Observable<void>{
   return this.http.post<void>(this.apiCheckOutUrl,products);
  }


}
