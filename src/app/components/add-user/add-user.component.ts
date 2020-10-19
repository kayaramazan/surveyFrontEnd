import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { func } from 'src/app/classes/func';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { 
   }

  ngOnInit(): void {
  }
  onSubmit(values){
    if(new func().confirmModal())
    {
      this.api.addUser(values).subscribe(result =>{
        
        (result.success) ? window.location.reload() : alert('Bu kullanici adi zaten mevcut')
        
      })
    }  
  }
  logout(){
    localStorage.clear()
    window.location.href='/';
  }
}
