import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user-survey',
  templateUrl: './list-user-survey.component.html',
  styleUrls: ['./list-user-survey.component.css']
})
export class ListUserSurveyComponent implements OnInit {

  results:any[]= []
  id = JSON.parse(localStorage.getItem('loggedUser'))[0]['id']

  constructor(private api:ApiService,private router : Router) {
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
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
