import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
   
  constructor(private api:ApiService,private router:Router) {
    if(JSON.parse(localStorage.getItem('loggedUser'))[0]['authority']!=1)
      this.router.navigate(['/login']) 
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
