import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { func } from 'src/app/classes/func';

@Component({
  selector: 'app-create-caption',
  templateUrl: './create-caption.component.html',
  styleUrls: ['./create-caption.component.css']
})
export class CreateCaptionComponent implements OnInit {

  constructor(private api:ApiService,private router: Router) { 
  
  }

  ngOnInit(): void {
  }
  onSubmit(values){
     
    if(new func().confirmModal())
    {
    this.api.createCaption(values).subscribe(result =>
      {
        if(result.success)
        { 
          alert('Anket Olusturuldu')
          window.location.reload()
        }
        else
        { 
          alert('Hata Olustu')
        }
      })
    }
  }
 
}
