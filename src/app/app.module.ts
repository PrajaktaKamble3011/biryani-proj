import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductService } from './product.service';
import { ProductRegComponent } from './admin/product_manage/product-reg/product-reg.component';
import { ProductdashboardComponent } from './admin/product_manage/productdashboard/productdashboard.component';
import { UpdateproductComponent } from './admin/product_manage/updateproduct/updateproduct.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserRegComponent } from './admin/user_manage/user-reg/user-reg.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserdashboardComponent } from './admin/user_manage/userdashboard/userdashboard.component';
import { UpdateuserComponent } from './admin/user_manage/updateuser/updateuser.component';
import { AboutComponent } from './about/about.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductRegComponent,
    ProductdashboardComponent,
    UpdateproductComponent,
    AdminpageComponent,
    UserpageComponent,
    UserRegComponent,
    AdminloginComponent,
    UserdashboardComponent,
    UpdateuserComponent,
    AboutComponent,
    UserloginComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
