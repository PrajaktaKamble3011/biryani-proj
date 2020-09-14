import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginUser(e)
{
  var adminname=e.target.elements[0].value;
  var password=e.target.elements[1].value;

  if (adminname == 'admin' && password == 'admin123' )  
{
  this.router.navigate(['admin']);
}

   else
   {
    alert("enter correct name and password...")
   }
}

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

}
