import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruiterServiceService } from '../recruiter-service.service';

@Component({
  selector: 'app-recruiter-register',
  templateUrl: './recruiter-register.component.html',
  styleUrls: ['./recruiter-register.component.css']
})
export class RecruiterRegisterComponent {
  recruiterData!: FormGroup;
  logoURL: string = '';
  license: string = '';

  constructor(
    private recruiterServiceService: RecruiterServiceService,
    private router: Router
  ) {
    // Initialize the form group
    this.recruiterData = new FormGroup({
      recruiterName: new FormControl(''),
      phoneNo: new FormControl(),
      email: new FormControl(''),
      password: new FormControl(''),
      companyName: new FormControl(''),
      description: new FormControl(''),
      location: new FormControl(''),
      companyPhoneNo: new FormControl(9191),
      website: new FormControl(''),
      industry: new FormControl(''),
      gst_in: new FormControl(''),
      license:new FormControl(''),
      logo_url:new FormControl('')
    });
  }

  registerRecruiter(){
    this.recruiterServiceService.uploadFile(this.license).subscribe((data)=>{
      this.recruiterServiceService.uploadFile(this.logoURL).subscribe((data)=>{
        this.recruiterServiceService.register(this.recruiterData.value).subscribe((data)=>{
          console.log(data)
          alert("Succesfully Registered!! We will get back to you")
          this.router.navigate(['/recruiter-login'])
        })
      })
    })
  }
  readLicense(event:any){
    this.license = event.target.files[0];
    console.log(event.target.files);
    this.recruiterData.patchValue({
      license: event.target.files[0].name
    });
  }
  readLogoUrl(event:any){
    this.logoURL = event.target.files[0];
    console.log(event.target.files);
    this.recruiterData.patchValue({
      logo_url: event.target.files[0].name
    });
  }
}
