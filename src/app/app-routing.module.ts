import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'; 
import { SurveyComponent } from './components/survey/survey.component'; 
import { CompleteComponent } from './components/complete/complete.component'; 
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { SurveyAssignComponent } from './components/survey-assign/survey-assign.component';
import { CreatSurveyComponent } from './components/creat-survey/creat-survey.component';
import { ShowResultsComponent } from './components/show-results/show-results.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'complete',component:CompleteComponent},
  {path:'survey-assign',component:SurveyAssignComponent},
  {path:'create-survey',component:CreatSurveyComponent},
  {path:'show-results',component:ShowResultsComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'admin',component:AdminPanelComponent},
  {path:'survey/:id',component:SurveyComponent}, 
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
