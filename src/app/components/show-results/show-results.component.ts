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
  results:any[]= []
  selectedUser = ""
  constructor(private api:ApiService,private router:Router) { 
    if(JSON.parse(localStorage.getItem('loggedUser'))[0]['authority']!=1)
    this.router.navigate(['/login']) 
    this.api.getResultUser().subscribe(item=>{
      this.users = item
      console.log(this.users)
    })
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
  showAnswer(id,username)
  {
    this.selectedUser = username
    this.api.getResults(id).subscribe((item:any) =>
    {
      this.results=item 
    }) 
  }
}
