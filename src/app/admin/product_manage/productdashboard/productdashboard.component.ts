import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.css']
})
export class ProductdashboardComponent implements OnInit {

  product:any=[];

  constructor(private productservice:ProductService) { }

  getProductData()
  {
    this.productservice.getProduct().subscribe((res)=>{
      this.product=res
    })
  }

  delete(id)
  {
    this.productservice.deleteProduct(id).subscribe((res)=>{
      alert("Product deleted successfully")
      this.getProductData()
    })
  }

  ngOnInit(): void {
    this.getProductData()
  }

}
