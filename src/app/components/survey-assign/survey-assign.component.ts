import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { func } from 'src/app/classes/func';

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
  surveyCaptions:any[]=[]
  constructor(private api:ApiService,private router:Router) { 
    if(JSON.parse(sessionStorage.getItem('loggedUser'))[0]['authority']!=1)
      this.router.navigate(['/login']) 

    this.api.getUser().subscribe((item)=>{
      this.users=item;
    })
    this.api.getCaptions().subscribe((result:any[]) =>{
      this.surveyCaptions = result
      console.log(this.surveyCaptions)
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
    if(new func().confirmModal())
    {
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
  }
  
  logout(){
    sessionStorage.clear()
    window.location.href='/'; 
  }

}
