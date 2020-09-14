import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ProductRegComponent } from './admin/product_manage/product-reg/product-reg.component';
import { UpdateproductComponent } from './admin/product_manage/updateproduct/updateproduct.component';
import { ProductdashboardComponent } from './admin/product_manage/productdashboard/productdashboard.component';
import { UserRegComponent } from './admin/user_manage/user-reg/user-reg.component';
import { UpdateuserComponent } from './admin/user_manage/updateuser/updateuser.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserdashboardComponent } from './admin/user_manage/userdashboard/userdashboard.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"admin",component:AdminpageComponent},
  {path:"regp",component:ProductRegComponent},
  {path:"showp",component:ProductdashboardComponent},
  {path:"updatep/:id",component:UpdateproductComponent},
  {path:"loginadmin",component:AdminloginComponent},
  
  {path:"user",component:UserpageComponent},
  {path:"regu",component:UserRegComponent},
  {path:"showu",component:UserdashboardComponent},
  {path:"updateu/:id",component:UpdateuserComponent},
  {path:"loginuser",component:UserloginComponent},
  
  {path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
