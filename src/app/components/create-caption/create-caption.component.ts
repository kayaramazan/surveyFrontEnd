import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-caption',
  templateUrl: './create-caption.component.html',
  styleUrls: ['./create-caption.component.css']
})
export class CreateCaptionComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  onSubmit(values){
     
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
