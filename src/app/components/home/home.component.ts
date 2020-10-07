import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ResourceLoader } from '@angular/compiler';
import { HeaderComponent } from '../header/header.component';
ApiService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginError = ""
  constructor(private router:Router,private api:ApiService) { 
    if(localStorage.getItem('loggedUser'))
    { 
      console.log(localStorage.getItem('loggedUser'))

      router.navigate(['/login'])
    } 
  }

  ngOnInit(): void {
  } 
  onSubmit(data)  {
    var header :HeaderComponent 
    var result = this.api.login(data.username,data.password).subscribe(data => {
      if(data)
      {
        localStorage.setItem('loggedUser',JSON.stringify(data)) 
        JSON.parse(localStorage.getItem('loggedUser'))[0]['username']
        if(JSON.parse(localStorage.getItem('loggedUser'))[0]['authority']==1)
        { 
          this.router.navigate(['/admin']) 
        }else
        this.router.navigate(['/login']) 
    
      }
    })
    this.loginError="Kullanıcı adı veya şifre yanlış"

    
     

  }
}
