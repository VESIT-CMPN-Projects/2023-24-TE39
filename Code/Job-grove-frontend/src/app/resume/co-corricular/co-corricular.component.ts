import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ResumeService } from '../resume.service';
import { Router } from '@angular/router';
import { minLengthIfNotEmpty } from 'src/app/shared/validators/min-length'
;
@Component({
  selector: 'app-co-corricular',
  templateUrl: './co-corricular.component.html',
  styleUrls: ['./co-corricular.component.css']
})
export class CoCorricularComponent {
  coCurricularActivityForm: FormGroup;

  constructor(private fb: FormBuilder, private resumeService: ResumeService, private router: Router) {
    this.coCurricularActivityForm = this.resumeService.resumeForm;
  }

  get coCurricularActivityArray(): FormArray {
    return this.coCurricularActivityForm.get('coCorricular') as FormArray;
  }

  addCoCurricularActivity() {
    this.coCurricularActivityArray.push(this.fb.group({
      description: ['']
    }));
  }

  removeCoCurricularActivity(index: number) {
    this.coCurricularActivityArray.removeAt(index);
  }

  onSubmit() {
    this.coCurricularActivityForm.markAllAsTouched();

    if (this.coCurricularActivityForm.valid) {
      this.resumeService.printCoCurricularActivityForm(this.coCurricularActivityForm.value);
      this.router.navigate(['/selected-template', this.resumeService.templateid]);
    }
  }
}
