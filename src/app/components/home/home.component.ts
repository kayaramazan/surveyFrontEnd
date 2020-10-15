import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'; 
import { AuthenticationService } from '../../services/authentication.service'; 
import { User } from 'src/app/models/user'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  loginError = ""  
  loading = false; 
  error = ''; 
  constructor(
    private router:Router, 
    private api:ApiService,
    private authenticationService: AuthenticationService) { 
      if(User.currentUser)
        router.navigate(['/login'])
  }

  ngOnInit(): void {
 
  } 
  onSubmit(data)  {  
    this.authenticationService.login(data.username, data.password) 
    .subscribe(user => {  
     if(user.err) 
      this.loginError="Kullanıcı adı veya şifre yanlış"
     else
     {
      localStorage.setItem('accesToken', user.result);  
      User.currentUser =(parseJwt(user.result)) 
      if(User.currentUser)
      { 
      localStorage.setItem('currentUser', User.currentUser[0].username); 
      window.location.href = '/login' 
      }
     }
       
      
  })
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };
        
    
      

     

  }
}
