import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-answers',
  templateUrl: './list-answers.component.html',
  styleUrls: ['./list-answers.component.css']
})
export class ListAnswersComponent implements OnInit {
  results : any[]=[]
  constructor(private api:ApiService,private router:Router) {

    var id = this.router.url.split('/')[2]
    this.api.listAnswers(id).subscribe((item:any[]) =>{ 
      this.results=item
    })
   }

  ngOnInit(): void {
  }
}
