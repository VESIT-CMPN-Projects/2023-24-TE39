import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ResumeService } from '../resume.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  detailsForm: FormGroup;
  constructor(private fb: FormBuilder, private resumeService: ResumeService,private route : ActivatedRoute, private router : Router) {
    this.detailsForm = this.resumeService.resumeForm;
  }
  onSubmit() {
    if (this.detailsForm.valid) {
      this.resumeService.printDetailsForm(this.detailsForm.value);
      this.router.navigate(['/education']);
      // Navigate to the next section
    } else {
      // Mark all fields as touched to show validation errors
      this.detailsForm.markAllAsTouched();
    }
  }
}
