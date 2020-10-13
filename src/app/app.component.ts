import { Component } from '@angular/core';
import { User } from './models'; 
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'surveyFrontEnd';  
  constructor(){

  }
}

  if(localStorage.getItem('accesToken'))
  {
    User.currentUser=parseJwt(localStorage.getItem('accesToken'))
  } 
function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};