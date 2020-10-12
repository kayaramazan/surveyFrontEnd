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
import { ListUserSurveyComponent } from './components/list-user-survey/list-user-survey.component';
import { CreateCaptionComponent } from './components/create-caption/create-caption.component';
import { ShowQuestionComponent } from './components/show-question/show-question.component';
import { ListAnswerFilteredComponent } from './components/list-answer-filtered/list-answer-filtered.component';
import { ShowAssignSurveyComponent } from './components/show-assign-survey/show-assign-survey.component';
import { MyDoughnutChartComponent } from './components/my-doughnut-chart/my-doughnut-chart.component';
import { ListUserResultsComponent } from './components/list-user-results/list-user-results.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'complete',component:CompleteComponent},
  {path:'survey-assign',component:SurveyAssignComponent},
  {path:'create-survey',component:CreatSurveyComponent},
  {path:'show-results',component:ShowResultsComponent},
  {path:'show-question/:id',component:ShowQuestionComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'list-answer-filtered',component:ListAnswerFilteredComponent},
  {path:'list-user-survey',component:ListUserSurveyComponent},
  {path:'create-caption',component:CreateCaptionComponent},
  {path:'admin',component:AdminPanelComponent},
  {path:'survey/:id',component:SurveyComponent}, 
  {path:'chart',component:MyDoughnutChartComponent},
  {path:'list-user-results',component:ListUserResultsComponent},
  {path:'show-assign-survey/:id',component:ShowAssignSurveyComponent}, 
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
