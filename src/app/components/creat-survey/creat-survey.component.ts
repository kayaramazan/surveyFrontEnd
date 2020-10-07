import { Component, OnInit, ɵConsole } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

import {FormArray, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-creat-survey',
  templateUrl: './creat-survey.component.html',
  styleUrls: ['./creat-survey.component.css']
})
export class CreatSurveyComponent implements OnInit {
  surveyCaptions:any[]=[]
  constructor(private api:ApiService,private router : Router) {
    this.api.getCaptions().subscribe((result:any[]) =>{
      this.surveyCaptions = result
      console.log(this.surveyCaptions)
    })
    if(JSON.parse(localStorage.getItem('loggedUser'))[0]['authority']!=1)
      this.router.navigate(['/login']) 
   }

  ngOnInit(): void {
  }
  onSubmit(values){
    
    var question = {surveyCaptionId:values.surveyCaptionId,answers :[values.c1,values.c2,values.c3,values.c4],question:values.question}
    console.log(question)
    this.api.createSurvey(question).subscribe(result =>
      {
        if(result.success)
        { 
          alert('Anket ekleme basarili')
          window.location.reload()
        }
        else
        { 
          alert('Hata Olustu')
        }
      })
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
