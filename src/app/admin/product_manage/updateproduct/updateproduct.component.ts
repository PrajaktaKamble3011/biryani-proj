import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ProductService } from '../../../product.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  form:FormGroup;
  product:any=[];
  id:number;

  update()
  {
    this.productservice.updateProduct(this.id,this.form.value).subscribe((res)=>{
    alert("data updated successfully")
    this.router.navigateByUrl("/showp")
   })
  }

  constructor(private productservice:ProductService,private activatedroute:ActivatedRoute,private router:Router) { }

  prod_category:string[]=["Non-veg starter","Tandoori starter","Biryani","Handi biryani","Drinks"];

  ngOnInit(): void {

    this.activatedroute.params.subscribe((param)=>{
      this.id=param["id"]
      this.product=this.productservice.getProductById(this.id).subscribe((data)=>{
        this.product=data;
        this.form=new FormGroup({
          prod_name:new FormControl(this.product.prod_name,[Validators.required]),
          prod_img:new FormControl(this.product.prod_img,[Validators.required]),
          prod_desc:new FormControl(this.product.prod_desc,[Validators.required]),
          prod_price:new FormControl(this.product.prod_price,[Validators.required]),
          prod_type:new FormControl(this.product.prod_category)
        })
      })
    })
  }

}
