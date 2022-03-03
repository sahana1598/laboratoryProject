import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleComponent } from './sample/sample.component';
import { HaematologyreportComponent } from './haematologyreport/haematologyreport.component';
import { ThyroidreportComponent } from './thyroidreport/thyroidreport.component';
import { GlucomteryreportComponent } from './glucomteryreport/glucomteryreport.component';
import { FpageComponent } from './fpage/fpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    SampleComponent,
    HaematologyreportComponent,
    ThyroidreportComponent,
    GlucomteryreportComponent,
    FpageComponent,
    UserpageComponent,
    ViewdetailsComponent,
    EditUserComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
