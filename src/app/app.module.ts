import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';  
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';
import {FormsModule} from '@angular/forms/';
import { CompleteComponent } from './components/complete/complete.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { SurveyAssignComponent } from './components/survey-assign/survey-assign.component';
import { CreatSurveyComponent } from './components/creat-survey/creat-survey.component';
import { ShowResultsComponent } from './components/show-results/show-results.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserSurveyComponent } from './components/list-user-survey/list-user-survey.component';
import { CreateCaptionComponent } from './components/create-caption/create-caption.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShowQuestionComponent } from './components/show-question/show-question.component';
import { ListAnswerFilteredComponent } from './components/list-answer-filtered/list-answer-filtered.component';
import { ShowAssignSurveyComponent } from './components/show-assign-survey/show-assign-survey.component'; 
import { ChartsModule } from 'ng2-charts';
import { MyDoughnutChartComponent } from './components/my-doughnut-chart/my-doughnut-chart.component';
import { ListUserResultsComponent } from './components/list-user-results/list-user-results.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
     SurveyComponent,
     CompleteComponent,
     AdminPanelComponent,
     SurveyAssignComponent,
     CreatSurveyComponent,
     ShowResultsComponent,
     AddUserComponent,
     ListUserSurveyComponent,
     CreateCaptionComponent,
     MenuComponent,
     ShowQuestionComponent,
     ListAnswerFilteredComponent,
     ShowAssignSurveyComponent,
     MyDoughnutChartComponent,
     ListUserResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
    
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
