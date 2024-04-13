import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperienceForm: FormGroup;

  constructor(private fb: FormBuilder, private resumeService: ResumeService) { 
    this.workExperienceForm = this.resumeService.resumeForm;
  }

  get workExperienceArray(): FormArray {
    return this.workExperienceForm.get('workExperience') as FormArray;
  }

  addWorkExperience() {
    this.workExperienceArray.push(this.fb.group({
      position: [''],
      company: [''],
      startDate: [''],
      endDate: [''],
      description: [''],
      country: [''],
    }));
  }

  removeWorkExperience(index: number) {
    this.workExperienceArray.removeAt(index);
  }

  onSubmit() {
    this.resumeService.printWorkExperienceForm(this.workExperienceForm.value);
  }
}

