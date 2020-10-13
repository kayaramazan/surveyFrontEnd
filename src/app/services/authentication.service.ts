import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { ApiService } from './api.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
   
    constructor(private http: HttpClient,private api:ApiService) {
       
    } 
    login(username: string, password: string):Observable<any> {
       return this.api.login(username,password) 
    }

    logout() {  
        localStorage.removeItem('currentUser'); 
    }
}