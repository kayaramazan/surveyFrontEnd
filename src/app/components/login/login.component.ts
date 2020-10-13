import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router'; 
import { User } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private api:ApiService,private router : Router) {   
    if(User.currentUser[0].authority == User.authReqAdmin)
      {  
        this.router.navigate(['/admin']) 
      }
     

      
  }
  users:any[] = []
  ngOnInit(): void {
    this.api.getSurveyUser().subscribe((item)=>{
      console.log(item)
      this.users=item;
    })
  }
  
  anketSec(id:number,surveyCaptionId:number){  
    sessionStorage.setItem('surveyCaptionId',surveyCaptionId.toString());
    this.router.navigate(['survey',id])
  }
  logout(){
    
    localStorage.clear()
    window.location.href='/';
  
  }

   
}
