import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  loggedUser = ""
  adminMenu = false;
  userMenu = false
  constructor(private router : Router) {  
   
    if(!sessionStorage.getItem('loggedUser'))
    router.navigate(['/']) 
    this.loggedUser  =(sessionStorage.getItem('loggedUser'))? JSON.parse(sessionStorage.getItem('loggedUser'))[0]['username'] : ""
  } 
  ngOnInit(): void {
  }
  menuChange(option){
    if(option == 1)
    {
      this.userMenu = false
      this.adminMenu = true
    }
    else
    {
      this.adminMenu = false
      this.userMenu = true
    }
  }
}
