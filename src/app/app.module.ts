import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component'; 
import { UnknownComponent } from './components/unknown/unknown.component';
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';
import {FormsModule} from '@angular/forms/';
import { CompleteComponent } from './components/complete/complete.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { SurveyAssignComponent } from './components/survey-assign/survey-assign.component';
import { CreatSurveyComponent } from './components/creat-survey/creat-survey.component';
import { ShowResultsComponent } from './components/show-results/show-results.component';
import { AddUserComponent } from './components/add-user/add-user.component'; 
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
     AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
