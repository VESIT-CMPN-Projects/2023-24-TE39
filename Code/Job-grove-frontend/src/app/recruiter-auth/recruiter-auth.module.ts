import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { RecruiterRegisterComponent } from './recruiter-register/recruiter-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RecruiterLoginComponent,
    RecruiterRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports:[
    RecruiterLoginComponent,
    RecruiterRegisterComponent
  ]
})
export class RecruiterAuthModule { }
