import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruiterServiceService } from '../recruiter-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent {
  login!: FormGroup;
  constructor(
    private recruiterServiceService: RecruiterServiceService,
    private router: Router,
    private cookieService: CookieService
  ) {
    // Initialize the form group
    this.login = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  // r.company_id,c.company_contact,c.company_name,c.description,c.company_website,c.location,c.industry,c.logo_url,
	// 		1 as validYN 
  loginRecruiter(){
    this.recruiterServiceService.loginRecruiter(this.login.value).subscribe((data)=>{
      console.log(data)
      if(data.validYN == 1){
        this.cookieService.set("id",data.rec_id)
        this.cookieService.set("recruiterName",data.rec_name)
        this.cookieService.set("Phone",data.rec_phone)
        this.cookieService.set("companyId",data.company_id)
        this.cookieService.set("companyPhone",data.company_contact)
        this.cookieService.set("companyName",data.company_name)
        this.router.navigate(['/recruiter-portal']);
      }
      else{
        alert("Invalid Credentials")
      }
    })
  }
  register(){
    this.router.navigate(['/recruiter-register']);
  }
}
