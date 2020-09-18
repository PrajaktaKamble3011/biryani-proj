import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormGroup,FormControl} from '@angular/forms';
import { User } from 'src/app/admin/user_manage/user-reg/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user:any=[];
  username:string;
  pwd:string;
  userForm:FormGroup;

  i:number=0;

  constructor(private userservice:UserService,private router:Router) { }

  getUserData()
  {
    this.userservice.getUser().subscribe((res)=>{
      this.user=res
    })
  }

  login()
  {
    for(this.i=0;this.i<this.user.length;this.i++)
    {
      if(this.userForm.value.username==this.user[this.i].user_name && this.userForm.value.pwd==this.user[this.i].user_password)
      {
        alert("User logged in successfully");
        this.router.navigateByUrl("user");
      }
      else if(this.userForm.value.username==this.user[this.i].user_name && this.userForm.value.pwd==this.user[this.i].user_password)
      {
        alert("please register yourself...or recheck username and password");
        this.router.navigateByUrl("regu"); 
      }
    }
    
  }

  ngOnInit(): void {
    this.getUserData();
    this.userForm=new FormGroup({
      username:new FormControl(""),
      pwd:new FormControl("")
    })
  }

}
