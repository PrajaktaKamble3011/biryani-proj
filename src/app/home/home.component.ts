import { NgModule,Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
//import { FormGroup,FormControl} from '@angular/forms';
import { Product } from 'src/app/admin/product_manage/product-reg/product'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    console.log(event.target.id);
  }
  

  /*getCategoryData(cat:string)
  {
    for(this.i=0;this.i<this.product.length;this.i++)
    {
      if(this.product[this.i].prod_type==this.cat)
      {
        this.temp[this.j++]=this.product[this.i]
      }
    }
    return this.temp;
  }*/

 /*category()
  {
    for(this.i=0;this.i<this.product.length;this.i++)
    {
      if(this.product[this.i].prod_type==this.option.value)
      {
        this.temp=this.product
      }
    }
  }*/
   
  constructor(private productservice:ProductService) 
  {
    
  }

  ngOnInit(): void {
    this.getProductData();

    //this.getCategoryData(this.cat);
    
    //this.category();
    
  }

}
