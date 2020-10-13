import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { func } from 'src/app/classes/func';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {
  listQuestions:any[] = []
  constructor(private api:ApiService,private router:Router) {
     
    api.getQuestions(this.router.url.split('/')[2]).subscribe(item=>{
     this.listQuestions=(new func().questionMaker(item))
    }) 
   }

  ngOnInit(): void {
  }
  
}
