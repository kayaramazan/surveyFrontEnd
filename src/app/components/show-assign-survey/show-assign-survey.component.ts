import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { func } from 'src/app/classes/func';

@Component({
  selector: 'app-show-assign-survey',
  templateUrl: './show-assign-survey.component.html',
  styleUrls: ['./show-assign-survey.component.css']
})
export class ShowAssignSurveyComponent implements OnInit {
  userSurveys:any[]=[]
  id:any
  constructor(private api:ApiService,private router:Router) {
    this.id=this.router.url.split('/')[2]
    this.api.showSurveyById(this.id).subscribe((item:any[])=>{
      this.userSurveys=item
      
    })
   }
   removeAssign(assignId)
   {
     if(new func().confirmModal()) 
     {
      this.api.removeAssign(assignId).subscribe((item:any)=>{
        if(item.success){
         alert('islem basarili') 
         window.location.reload()
        }
      }) 
     }
   } 
  ngOnInit(): void {
  }

}
