import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterNavComponent } from './recruiter-nav/recruiter-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecruiterSidebarComponent } from './recruiter-sidebar/recruiter-sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RecruiterNavComponent,
    RecruiterSidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[
    RecruiterNavComponent,
    RecruiterSidebarComponent
  ]
})
export class SharedModule { }
