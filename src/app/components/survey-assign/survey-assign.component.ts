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
     
    this.api.getUser().subscribe((item)=>{
      this.users=item;
    })
    this.api.getCaptions().subscribe((result:any[]) =>{
      this.surveyCaptions = result 
    })
  }

  ngOnInit(): void {
  }
  atamaSec(id,username)
  {
    this.selectedUser=username
    this.selectedUserId=id;
    this.isSelect = true 
  }
  onSubmit(values){
    if(new func().confirmModal())
    {
    this.api.assignSurvey(this.selectedUserId,values).subscribe(
      (item:{success:boolean})=>
      { 
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
   

}
