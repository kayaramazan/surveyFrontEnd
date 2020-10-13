import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Route, Router } from '@angular/router';   
import { func } from '../../classes/func'; 

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
   titles:any[]=[]
   users:any[]=[]
   userSurveys: any[]=[]
  constructor(private api:ApiService,private router:Router) {  
    this.api.getCaptions().subscribe((item:any)=>{
      this.titles = item; 
    })
    this.api.getUser().subscribe(item=>{
      this.users=item
    }) 
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    window.location.href='/';
  }
  anketSil(id)
  {
   if(new func().confirmModal())
   {
    this.api.deleteSurvey(id).subscribe(item=>{
      if(item.success){
        alert('Anket Silindi') 
        window.location.reload()
      }
    }) 
   }
  }
  soruEkle(){
    this.router.navigate(['/create-survey'])
  }
  sorulariGor(id){
    this.router.navigate(['/show-question/'+id])
  }
  anketAta(){ 
    this.router.navigate(['/survey-assign'])
  }
  kullaniciSil(id){
    if(new func().confirmModal())
    {
     this.api.deleteUser(id).subscribe(item=>{
       if(item.success){
        alert('Kullanici Silindi') 
        window.location.reload()
       }
     }) 
    }
  }
  anketGor(id){ 
    this.router.navigate(['/show-assign-survey/'+id])
  }
   
}