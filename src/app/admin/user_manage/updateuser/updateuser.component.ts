import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../../../user.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  form:FormGroup;
  user:any=[];
  id:number;

  update()
  {
    this.userservice.updateUser(this.id,this.form.value).subscribe((res)=>{
      alert("user updated successfully")
      this.router.navigateByUrl("/showu")
     })
  }

  constructor(private userservice:UserService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>{
      this.id=param["id"]
      this.user=this.userservice.getUserById(this.id).subscribe((data)=>{
        this.user=data;
        this.form=new FormGroup({
          user_name:new FormControl(this.user.user_name,[Validators.required]),
          user_password:new FormControl(this.user.user_password,[Validators.required]),
          user_addrs:new FormControl(this.user.user_addrs,[Validators.required]),
          user_mobile:new FormControl(this.user.user_mobile,[Validators.required])
        })
      })
    })
  }

}
