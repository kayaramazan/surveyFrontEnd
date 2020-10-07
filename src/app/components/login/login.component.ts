import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private api:ApiService,private router : Router) {  
    if(JSON.parse(localStorage.getItem('loggedUser'))[0]['authority']==1)
      { 
        this.router.navigate(['/admin']) 
      }else
      this.router.navigate(['/login']) 
      
  }
  users:any[] = []
  ngOnInit(): void {
    this.api.getSurveyUser().subscribe((item)=>{
      console.log(item)
      this.users=item;
    })
  }
  
  anketSec(id:number){
    console.log(id,'kisisi icin anket secildi')
    this.router.navigate(['survey',id])
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

   
}
