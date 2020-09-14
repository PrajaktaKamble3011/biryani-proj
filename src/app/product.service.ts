import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api="http://localhost:4444/products/"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  saveProduct(data){
    return this.httpclient.post(api,data)
   }

   getProduct()
   {
     return this.httpclient.get(api)
   }

   getProductById(id)
   {
     return this.httpclient.get(api+id)
   }

   updateProduct(id,data)
   {
     return this.httpclient.put(api+id,data)
   }

   deleteProduct(id)
   {
     return this.httpclient.delete(api+id)
   }

  constructor(private httpclient:HttpClient) { }
}
