import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 
import { User } from '../models';

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
  getQuestions(surveyCaptionId): Observable<any>{
    console.log(surveyCaptionId)
    return this.http.get(this.SERVER_URL+'/api/survey/questions/'+surveyCaptionId);
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
    console.log(User.currentUser[0].id)
    let userId=User.currentUser[0].id
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
  createCaption(caption): Observable<any>{ 
    return this.http.post(this.SERVER_URL+'/api/survey/newCaption',caption)
   
  }
  //Kullanici ekler
  addUser(user): Observable<any>{ 
    return this.http.post(this.SERVER_URL+'/api/users/register',user)
  }
  //adminin show result sayfasindaki anket yapmis kullanicilari ceker
  getResultUser(): Observable<any>{
    return this.http.get(this.SERVER_URL+'/api/users/resultUser')
  }
  getResults(id){
    return this.http.get(this.SERVER_URL+'/api/users/results/'+id)
  }
  getResultsById(id){
    return this.http.get(this.SERVER_URL+'/api/users/resultsById/'+id)
  }
  listAnswers(id){
    return this.http.get(this.SERVER_URL+'/api/users/listAnswers/'+id)
  }
  getResultsFilter(post){
    return this.http.post(this.SERVER_URL+'/api/users/results',post)
  }
  getCaptions(){
    return this.http.get(this.SERVER_URL+'/api/survey/title')
  }
  getTotalResult(){
    return this.http.get(this.SERVER_URL+'/api/users/totalResult')
  }
  //Kullanici sile
  deleteUser(user): Observable<any>{ 
    return this.http.post(this.SERVER_URL+'/api/users/delete',{userId:user})
  }
  //Delete survey
  deleteSurvey(user): Observable<any>{ 
    console.log(user)
    return this.http.post(this.SERVER_URL+'/api/survey/delete',{captionId:user})
  }
  showSurveyById(id)
  {
    return this.http.get(this.SERVER_URL+'/api/survey/listById/'+id);
    
  }
  removeAssign(assignId) {
    return this.http.post(this.SERVER_URL+'/api/users/removeAssign',{assignId})
  }
  
}
