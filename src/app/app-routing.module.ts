import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FpageComponent } from './fpage/fpage.component';
import { GlucomteryreportComponent } from './glucomteryreport/glucomteryreport.component';
import { GuardGuard } from './guard.guard';
import { HaematologyreportComponent } from './haematologyreport/haematologyreport.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';
import { ThyroidreportComponent } from './thyroidreport/thyroidreport.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent,canActivate:[GuardGuard]},
  {path:"getAllSamples",component:DetailsComponent,canActivate:[GuardGuard]},
  {path:"entersample",component:SampleComponent,canActivate:[GuardGuard]},
  {path:"haematology",component:HaematologyreportComponent,canActivate:[GuardGuard]},
  {path:"glucomtery",component:GlucomteryreportComponent,canActivate:[GuardGuard]},
  {path:"thyroid",component:ThyroidreportComponent,canActivate:[GuardGuard]},
  {path:"fpage",component:FpageComponent,canActivate:[GuardGuard]},
  {path:"userpage",component:UserpageComponent,canActivate:[GuardGuard]},
  {path:"getParticularUser/:_id",component:ViewdetailsComponent,canActivate:[GuardGuard]},
  {path:"getUser/:_id",component:EditUserComponent,canActivate:[GuardGuard]}
  // {path:"**",component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
