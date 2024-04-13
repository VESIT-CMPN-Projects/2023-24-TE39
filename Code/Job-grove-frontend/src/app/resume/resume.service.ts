import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }
  templateid!: number;
  resumeForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    aboutMe: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    linkedin: new FormControl('', Validators.required),
    github: new FormControl('', Validators.required),
    education: new FormArray([
      new FormGroup({
        institution: new FormControl('', Validators.required),
        degree: new FormControl('', Validators.required),
        year: new FormControl('', Validators.required),
        percentage: new FormControl('', Validators.required),
        board: new FormControl('', Validators.required),
        location: new FormControl('', Validators.required),
      }),
    ]),
    skills: new FormArray([
      new FormGroup({
        skillName: new FormControl('', Validators.required),
      }),
    ]),
    workExperience: new FormArray([
      new FormGroup({
        w_type: new FormControl('', Validators.required),
        company: new FormControl('', Validators.required),
        position: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        tenure: new FormControl('', Validators.required)
      }),
    ]),
    coCorricular: new FormArray([
      new FormGroup({
        description: new FormControl('', Validators.minLength(7)), // Min length set to 7 characters
      }),
    ]),
  });

  insertResumeData(resumeData: any) {
  }
  printSkillForm(formValue: any) {
    console.log('Skill Form:', formValue);
    // Perform any other actions with the form value here
  }
  printWorkExperienceForm(formValue: any) {
    console.log('Work Experience Form:', formValue);
    // Perform any other actions with the form value here
  }
  printCoCurricularActivityForm(formValue: any) {
    console.log('Co-Curricular Form:', formValue);
    // Perform any other actions with the form value here
  }
  printEducationForm(formValue: any) {
    console.log('Education Form:', formValue);
    // Perform any other actions with the form value here
  }
  printDetailsForm(formValue: any) {
    console.log('Resume Form:', formValue);
    // Perform any other actions with the form value here
  }
}
