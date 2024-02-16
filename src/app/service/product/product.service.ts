import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl=environment.apiUrl+"/products";

  constructor(private http:HttpClient) { }

  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  
}
