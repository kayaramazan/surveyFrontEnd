import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-assign',
  templateUrl: './survey-assign.component.html',
  styleUrls: ['./survey-assign.component.css']
})
export class SurveyAssignComponent implements OnInit {
  users = []
  selectedUser = ""
  selectedUserId :number 
  isSelect = false
  constructor(private api:ApiService,private router:Router) { 
    if(JSON.parse(localStorage.getItem('loggedUser'))[0]['authority']!=1)
      this.router.navigate(['/login']) 

    this.api.getUser().subscribe((item)=>{
      this.users=item;
    })
  }

  ngOnInit(): void {
  }
  atamaSec(id,username)
  {
    this.selectedUser=username
    this.selectedUserId=id;
    this.isSelect = true
    console.log('secilen',id)
  }
  onSubmit(values){
    this.api.assignSurvey(this.selectedUserId,values).subscribe(
      (item:{success:boolean})=>
      {
        console.log(values)
      if(item.success) 
      { 
        setTimeout(() => {
          alert('Atama basarili')
          window.location.reload()
        }, 1000);
      }
    })
    
  }
  
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
