import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service'

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  
  product:any=[];

  getProductData()
  {
    this.productservice.getProduct().subscribe((res)=>{
      this.product=res
    })
  }

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
  }

}
