import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

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
      this.api.addUser(values).subscribe(result =>{
        if(result.success)
        { 
          window.location.reload();
        }
        else{
        alert('Bu kullanici adi zaten mevcut')
        }
      })
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}