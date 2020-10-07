import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

import {FormArray, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-creat-survey',
  templateUrl: './creat-survey.component.html',
  styleUrls: ['./creat-survey.component.css']
})
export class CreatSurveyComponent implements OnInit {

  constructor(private api:ApiService,private router : Router) {
    
    if(JSON.parse(localStorage.getItem('loggedUser'))[0]['authority']!=1)
      this.router.navigate(['/login']) 
   }

  ngOnInit(): void {
  }
  onSubmit(values){
    var question = {answers :[values.c1,values.c2,values.c3,values.c4],question:values.question}
    
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
