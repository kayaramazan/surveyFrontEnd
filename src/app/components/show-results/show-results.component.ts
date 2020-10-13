import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {
  users:any[]=[]
  answers:any[]=[]
  results:any[]= []
  selectedUser = ""
  TutorialName = ""
  count = 0
  constructor(private api:ApiService,private router:Router) { 
     
    this.api.getResultUser().subscribe(item=>{
      this.users = item  
      this.users.forEach(
        element => 
        {
          this.api.getResults(element.id).subscribe((item:any) =>
          { 
            this.answers.push(item) 
          }) 
        })
  
      })
  } 
  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    window.location.href='/';
  }
  showAnswer(captionId,id,userId)
  {  
    var post={captionId,id,userId} 
    this.api.getResultsFilter(post).subscribe((item:any) =>
    {
      sessionStorage.setItem('answers',JSON.stringify(item)); 
      this.router.navigate(['/list-answer-filtered'])  
    }) 
  }
}