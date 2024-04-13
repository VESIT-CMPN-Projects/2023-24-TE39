import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { CoCorricularComponent } from './co-corricular/co-corricular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { SelectedTemplateComponent } from './selected-template/selected-template.component';
import html2canvas from 'html2canvas';
// import { jspdf } from 'jspdf';


@NgModule({
  declarations: [
    SkillsComponent,
    ProfileComponent,
    EducationComponent,
    WorkExperienceComponent,
    CoCorricularComponent,
    TemplateComponent,
    SelectedTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  exports: [
    SkillsComponent,
    ProfileComponent,
    EducationComponent,
    WorkExperienceComponent,
    CoCorricularComponent,
    TemplateComponent,
    SelectedTemplateComponent
  ]
})
export class ResumeModule { }
