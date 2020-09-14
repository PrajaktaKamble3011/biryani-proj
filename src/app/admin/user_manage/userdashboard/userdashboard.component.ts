import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service'

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  user:any=[];

  constructor(private userservice:UserService) { }

  getUserData()
  {
    this.userservice.getUser().subscribe((res)=>{
      this.user=res
    })
  }

  delete(id)
  {
    this.userservice.deleteUser(id).subscribe((res)=>{
      alert("User deleted successfully")
      this.getUserData()
    })
  }

  ngOnInit(): void {
    this.getUserData()
  }

}
