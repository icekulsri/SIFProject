import { Router,RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
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

const routes : Routes = [
    {path:'',component : LoginComponent},
    {path:'userLogin',component : UserloginComponent},
    {path:'registerLogin',component : RegisterComponent},
    {path:'company',component : CompanyComponent},
    {path:'department',component : DepartmentComponent},
    {path:'match',component : MatchComponent},
    {path:'detail',component : DetailComponent},
    {path:'match2',component : Match2Component},
    {path:'blind',component : BlindComponent},
    {path:'deaf',component : DeafComponent},
    {path:'physicaldisable',component : PhysicaldisableComponent},
    {path:'success',component : SuccessComponent}
]

export const routing = RouterModule.forRoot(routes); 