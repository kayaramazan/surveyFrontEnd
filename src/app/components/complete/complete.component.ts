import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor(private router:Router) { 
     
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    window.location.href='/';
  }
}
