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
  Products:Product[]=[
    {
      "id":1,
      "name":"dog",
      "price":100,
      "image_url":"product1.jpg"
    },
     {
      "id":2,
      "name":"cat",
      "price":12,
      "image_url":"product1.jpg"
    },
     {
      "id":3,
      "name":"crow",
      "price":50,
      "image_url":"product1.jpg"
    }, {
      "id":4,
      "name":"bird",
      "price":1000,
      "image_url":"product1.jpg"
    },
     {
      "id":5,
      "name":"dog",
      "price":100,
      "image_url":"product1.jpg"
    },
     {
      "id":6,
      "name":"cat",
      "price":12,
      "image_url":"product1.jpg"
    },
     {
      "id":7,
      "name":"crow",
      "price":50,
      "image_url":"product1.jpg"
    }, {
      "id":8,
      "name":"bird",
      "price":1000,
      "image_url":"product1.jpg"
    }
    
  ]

  constructor(private http:HttpClient) { }

  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  
}
