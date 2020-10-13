import { Component, OnInit, ɵConsole } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

import {FormArray, FormControl, FormGroup} from '@angular/forms';
import { func } from 'src/app/classes/func';
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
   }

  ngOnInit(): void {
  }
  onSubmit(values){
    if(new func().confirmModal())
    {
    console.log(values)
    var question = {
      surveyCaptionId:values.surveyCaptionId,
      answers :
      [
        {cevap:values.c1,score:values.score1},
        {cevap:values.c2,score:values.score2},
        {cevap:values.c3,score:values.score3},
        {cevap:values.c4,score:values.score4},
        {cevap:values.c5,score:values.score5}
      ],
      question:values.question}
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
  }

  logout(){
    localStorage.clear()
    window.location.href='/';
  }

}
