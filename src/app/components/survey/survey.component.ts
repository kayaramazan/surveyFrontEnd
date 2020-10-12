import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router'; 
import { func } from 'src/app/classes/func';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  listQuestions:any[] = [] 
  selectedAnswers : any[] = []
  questions: any[] = []
  questionCount = 0 
  isSurveyComplete = "disabled"
  constructor(private api: ApiService,private router:Router) {
    if(!sessionStorage.getItem('loggedUser')) 
      router.navigate(['/'])
   }
  ngOnInit(): void {
    console.log(sessionStorage.getItem('surveyCaptionId'))
    this.api.getQuestions(sessionStorage.getItem('surveyCaptionId')).subscribe((item: any[]) => { 
      this.listQuestions = this.questionMaker(item) 
    })

  }
  questionMaker(item:any[]){

    var listQuestions:any[] = [] 
    var count = item.length
    for (let i = 0; i < count/5; i++) { 
      this.questionCount++;
      var len = item.filter(e => e.surveyQuestion == item[i].surveyQuestion).length
      listQuestions.push({ soru: item[i * len].surveyQuestion })
      
      for (let j = 0; j < 5; j++) {
        listQuestions.push({ cevap: item[i * 5 + j].answer, questionId: item[i * len + j].id,answerId:item[i * len + j].cevapId })

      }
    }
    return listQuestions
  }
  submitSurvey(){  
    if(new func().confirmModal("Anket gönderilsin mi?"))
    {
    var surveyUserId = this.router.url.split('/')[2]
    var userId  = JSON.parse(sessionStorage.getItem('loggedUser'))[0]['id']
    var surveyCaptionId  = sessionStorage.getItem('surveyCaptionId')

    var answers = {results:this.selectedAnswers,surveyUserId:surveyUserId,userId:userId,surveyCaptionId:surveyCaptionId } 
    console.log(answers)
    this.api.sendSurvey(answers).subscribe((result:{succes:boolean}) =>
      {
        if(result.succes){  
          this.router.navigate(['/complete'])
        }
      })
 
    }
  }
  onChangeAnswer(item)
  { 

    
      if(this.selectedAnswers.filter(e => e.questionId == item.questionId).length > 0)
      {
        console.log('silinecek konum',this.selectedAnswers.findIndex(e => e.questionId == item.questionId))
        this.selectedAnswers.splice(this.selectedAnswers.findIndex(e => e.questionId == item.questionId),1)
        this.selectedAnswers.push(item)
      }
    else
      this.selectedAnswers.push(item)
      console.log(this.selectedAnswers)
      if(this.selectedAnswers.length == this.questionCount)
      {
        this.isSurveyComplete="" 
      }
  } 
    
    

      
  }


