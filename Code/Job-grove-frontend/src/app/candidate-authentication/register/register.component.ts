import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ResumeService } from 'src/app/resume/resume.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: FormGroup;
  resumeUrl: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private resumeService: ResumeService,
    private router: Router
  ) {
    // Initialize the form group
    this.userData = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      contact: new FormControl(),
      gender: new FormControl(),
      password: new FormControl(),
      resumeUrl: new FormControl()
    });
  }

  ngOnInit(): void {
    // Load stored user data from localStorage
    // const storedUserData = localStorage.getItem('userData');
    // if (storedUserData) {
    //   this.userData.patchValue(JSON.parse(storedUserData));
    // }
  }

  createResume() {
    // Store form data in localStorage
    console.log(this.userData.value); 
    // localStorage.setItem('userData', JSON.stringify(this.userData.value));
    this.router.navigate(['/templates']);
  }

  registerUser() {
    console.log(this.userData.value);
    const resumeData: FormGroup = this.resumeService.resumeForm
    console.log(resumeData.value);
    this.authenticationService.uploadFile(this.resumeUrl).subscribe((data) => {
      this.authenticationService.registerUser(this.userData.value,resumeData.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['']);
      });
    });
  }

  read(event: any) {
    this.resumeUrl = event.target.files[0];
    console.log(event.target.files);
    this.userData.patchValue({
      resumeUrl: event.target.files[0].name
    });
  }
}
