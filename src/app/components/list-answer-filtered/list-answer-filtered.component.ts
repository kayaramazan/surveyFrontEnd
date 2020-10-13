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
    this.results = (JSON.parse(sessionStorage.getItem('answers'))); 
   }

  logout(){
    localStorage.clear()
    window.location.href='/';
  }

  ngOnInit(): void {
  }

}
