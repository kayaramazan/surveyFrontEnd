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
    if(sessionStorage.getItem('loggedUser'))
    { 
      console.log(sessionStorage.getItem('loggedUser'))

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
        sessionStorage.setItem('loggedUser',JSON.stringify(data)) 
        JSON.parse(sessionStorage.getItem('loggedUser'))[0]['username']
        if(JSON.parse(sessionStorage.getItem('loggedUser'))[0]['authority']==1)
        {  
          window.location.href='/admin';
        }else
         window.location.href='/login';
    
      }
    }).add(()=>{
      this.loginError="Kullanıcı adı veya şifre yanlış"

    })

    
     

  }
}
