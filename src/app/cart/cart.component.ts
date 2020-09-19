import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/admin/product_manage/product-reg/product';
import {ReplyService} from 'src/app/reply.service';
import {ProductService} from 'src/app/product.service'
import { Router, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 cartItems = [];
 cartTotal = 0;
 //product:Product[]=[];

  constructor(private reply:ReplyService,private productservice:ProductService) { }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productName === product.prod_name) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productName: product.prod_name,
        qty: 1,
        price: product.prod_price
      })
    }
   
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  ngOnInit(): void {
    this.reply.getReply().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }

}
