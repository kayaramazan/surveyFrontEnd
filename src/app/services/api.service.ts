import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = environment.SERVER_URL
  constructor(private http:HttpClient) { }
  getUser(): Observable<any> { 
    return this.http.get(this.SERVER_URL+'/api/users');
  }
  //Anket sorularini cekme
  getQuestions(): Observable<any>{
    return this.http.get(this.SERVER_URL+'/api/survey/questions');
  }
  //Giris
  login(username,password): Observable<any>
  {  
   return this.http.post(this.SERVER_URL+'/api/users/login',{username,password}) 
  }
  // Anket onaylama ve gonderme
  sendSurvey(answers): Observable<any>
  {
    console.log(answers)
    return this.http.post(this.SERVER_URL+'/api/survey/finalAnswer',{answers})
  }
  //Kullanicilarin yapmasi gereken anketleri ceker
  getSurveyUser(): Observable<any> { 
    let userId=JSON.parse(localStorage.getItem('loggedUser'))[0]['id']
    return this.http.get(this.SERVER_URL+'/api/users/'+userId);
  }
  //Kullanicilara anket atama
  assignSurvey(userId,assigns): Observable<any>{
    return this.http.post(this.SERVER_URL+'/api/admin/surveyAssign',{userId,assigns})
  }
  //Anket olusturur
  createSurvey(question): Observable<any>{
    console.log(question)
    return this.http.post(this.SERVER_URL+'/api/survey/new',question)
   
  }
  //Kullanici ekler
  addUser(user): Observable<any>{
    user.password =Math.floor((Math.random() * 899999) + 100000); 
    console.log('Olusturulan Sifre : '+user.password)
    return this.http.post(this.SERVER_URL+'/api/users/register',user)
  }
  //adminin show result sayfasindaki anket yapmis kullanicilari ceker
  getResultUser(): Observable<any>{
    return this.http.get(this.SERVER_URL+'/api/users/resultUser')
  }
  getResults(id){
    return this.http.get(this.SERVER_URL+'/api/users/results/'+id)
  }
}
