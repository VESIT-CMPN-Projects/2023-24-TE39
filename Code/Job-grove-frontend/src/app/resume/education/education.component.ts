import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from '../resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationForm: FormGroup;
  constructor(private fb: FormBuilder, private resumeService: ResumeService,private router : Router) {
    this.educationForm = this.resumeService.resumeForm;
  }

  get educationArray(): FormArray {
    return this.educationForm.get('education') as FormArray;
  }

  addEducation() {
    this.educationArray.push(this.fb.group({
      institution: ['',Validators.required],
      degree: ['',Validators.required],
      year: ['',Validators.required],
      percentage: ['',Validators.required],
      board: ['',Validators.required],
    }));
  }

  removeEducation(index: number) {
    this.educationArray.removeAt(index);
  }

  onSubmit() {
    this.educationForm.markAllAsTouched();
    if(this.educationForm.valid){
      this.resumeService.printEducationForm(this.educationForm.value);
      this.router.navigate(['/skills']);
    }
  }
  
}
