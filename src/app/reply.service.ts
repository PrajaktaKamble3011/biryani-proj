import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {
  subject=new Subject();

  constructor() { }

  sendReply(product)  {

  this.subject.next(product)

  }

  getReply(){

     return this.subject.asObservable()
    
  }
  
}
