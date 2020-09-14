import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { UserService } from '../../../user.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  form:FormGroup;
  user:any=[];

  register()
  {
    /*this.product.push(this.form.value);
    alert("done");*/
    this.userservice.saveUser(this.form.value).subscribe((res)=>{
     alert("data save successfully")
     this.router.navigateByUrl("/")
     alert("Please signup yourself...")
   })
  }
  
  getUserData()
  {
     this.userservice.getUser().subscribe((res)=>{
       this.user=res
   })
  }

  constructor(private userservice:UserService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.form=new FormGroup({
      user_name:new FormControl("",[Validators.required]),
      user_password:new FormControl("",[Validators.required]),
      user_addrs:new FormControl("",[Validators.required]),
      user_mobile:new FormControl("",[Validators.required])
    })
  }

}
