import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api="http://localhost:5555/users/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  saveUser(data){
    return this.httpclient.post(api,data)
   }

   getUser()
   {
     return this.httpclient.get(api)
   }

   getUserById(id)
   {
     return this.httpclient.get(api+id)
   }

   updateUser(id,data)
   {
     return this.httpclient.put(api+id,data)
   }

   deleteUser(id)
   {
     return this.httpclient.delete(api+id)
   }

  constructor(private httpclient:HttpClient) { }
}
