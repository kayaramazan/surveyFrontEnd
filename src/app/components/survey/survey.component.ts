import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  listQuestions = [] 
  selectedAnswers : any[] = []
  questions: any[] = []
  questionCount = 0 
  isSurveyComplete = "disabled"
  constructor(private api: ApiService,private router:Router) {
    if(!localStorage.getItem('loggedUser')) 
      router.navigate(['/'])
   }
  ngOnInit(): void {
    
    this.api.getQuestions().subscribe((item: any[]) => {
      this.questions = item 
      
      var count = this.questions.length
      for (let i = 0; i < count/4; i++) { 
        this.questionCount++;
        var len = this.questions.filter(e => e.surveyQuestion == this.questions[i].surveyQuestion).length
        this.listQuestions.push({ soru: this.questions[i * len].surveyQuestion })
        
        for (let j = 0; j < 4; j++) {
          this.listQuestions.push({ cevap: this.questions[i * 4 + j].answer, questionId: this.questions[i * len + j].id,answerId:this.questions[i * len + j].cevapId })

        }
      }
      this.questions = this.listQuestions

    })

  }
  submitSurvey(){  
    
    var surveyUserId = this.router.url.split('/')[2]
    var userId  = JSON.parse(localStorage.getItem('loggedUser'))[0]['id']
    var answers = {results:this.selectedAnswers,surveyUserId:surveyUserId,userId:userId} 
    console.log(answers)
    this.api.sendSurvey(answers).subscribe((result:{succes:boolean}) =>
      {
        if(result.succes){  
          this.router.navigate(['/complete'])
        }
      })
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


