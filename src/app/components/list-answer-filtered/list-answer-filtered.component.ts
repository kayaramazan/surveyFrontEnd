import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-answer-filtered',
  templateUrl: './list-answer-filtered.component.html',
  styleUrls: ['./list-answer-filtered.component.css']
})
export class ListAnswerFilteredComponent implements OnInit {
  results : any[]=[]
  constructor( private router:Router) {
    if(JSON.parse(sessionStorage.getItem('loggedUser'))[0]['authority']!=1)
    this.router.navigate(['/login']) 
    this.results = (JSON.parse(sessionStorage.getItem('answers')));
    console.log(this.results)
   }

  logout(){
    sessionStorage.clear()
    window.location.href='/';
  }

  ngOnInit(): void {
  }

}
