import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RestHandlerService } from './services.service';
import { RegisterComponent } from './register/register.component';
import { CompanyComponent } from './company/company.component';
import { DepartmentComponent } from './department/department.component';
import { MatchComponent } from './match/match.component';
import { DetailComponent } from './detail/detail.component';
import { Match2Component } from './match2/match2.component';
import { BlindComponent } from './blind/blind.component';
import { DeafComponent } from './deaf/deaf.component';
import { PhysicaldisableComponent } from './physicaldisable/physicaldisable.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserloginComponent,
    RegisterComponent,
    CompanyComponent,
    DepartmentComponent,
    MatchComponent,
    DetailComponent,
    Match2Component,
    BlindComponent,
    DeafComponent,
    PhysicaldisableComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [RestHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
