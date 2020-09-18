import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { Product } from '../admin/product_manage/product-reg/product';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  
  product:any=[];
  temp:string[]=[];
  cat:string;
  

  i:number=0;
  j:number=0;

  getProductData()
  {
    this.productservice.getProduct().subscribe((res)=>{
      this.product=res
    })
  }

  getCategoryData(event)
  {
    console.log(event);
    console.log(event.target.id);
    this.cat=event.target.id;
    for(this.i=0;this.i<this.product.length;this.i++)
    {
      if(this.product[this.i].prod_type==this.cat)
      {
        this.temp[this.j++]=this.product[this.i]
      }
    }
    return this.temp;
  }

  addProductToCart(Product : Product )
  {
    
  }
     
  constructor(private productservice:ProductService,private router : Router) {}

  ngOnInit(): void {
    this.getProductData();
  }


}
