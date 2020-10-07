import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-user-survey',
  templateUrl: './list-user-survey.component.html',
  styleUrls: ['./list-user-survey.component.css']
})
export class ListUserSurveyComponent implements OnInit {

  results:any[]= []
  id = JSON.parse(localStorage.getItem('loggedUser'))[0]['id']

  constructor(private api:ApiService) {
    this.showAnswer(this.id)
   }

  ngOnInit(): void {
  }
  showAnswer(id)
  { 
    this.api.getResults(id).subscribe((item:any) =>
    {
      this.results=item 
    }) 
  }
}
