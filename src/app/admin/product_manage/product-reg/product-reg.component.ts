import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { ProductService } from '../../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-reg',
  templateUrl: './product-reg.component.html',
  styleUrls: ['./product-reg.component.css']
})
export class ProductRegComponent implements OnInit {
  
  form:FormGroup;
  product:any=[];

  register()
  {
    /*this.product.push(this.form.value);
    alert("done");*/
    this.productservice.saveProduct(this.form.value).subscribe((res)=>{
     alert("data save successfully")
     this.router.navigate(['admin']);
   })
  }
  
  getProductData()
  {
     this.productservice.getProduct().subscribe((res)=>{
       this.product=res
   })
  }

  constructor(private productservice:ProductService,private router:Router) { }

  prod_category:string[]=["Non-veg starter","Tandoori starter","Biryani","Handi biryani","Drinks"];

  ngOnInit(): void {

    this.form=new FormGroup({
      prod_name:new FormControl("",[Validators.required]),
      prod_img:new FormControl("",[Validators.required]),
      prod_desc:new FormControl("",[Validators.required]),
      prod_price:new FormControl("",[Validators.required]),
      prod_type:new FormControl(this.prod_category[0])
    })
  }

}
