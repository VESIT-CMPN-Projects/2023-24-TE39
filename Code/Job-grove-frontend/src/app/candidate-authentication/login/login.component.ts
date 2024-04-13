import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CandidateAuthenticationModule } from '../candidate-authentication.module';
import { AuthenticationService } from '../authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authenticationService: AuthenticationService, private cookieService: CookieService, private router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  submit() {
    this.authenticationService.validateUser(this.loginForm.value).subscribe((data) => {
      console.log(data)
      if (data.validYN == 1) {
        this.cookieService.set("id", data.candidate_id)
        this.cookieService.set("name", data.name)
        this.cookieService.set("email", data.email)
        this.cookieService.set("contact", data.contact)
        this.cookieService.set("token", data.token)
        this.cookieService.set("isLoggedin", "1")
        this.router.navigate(['/candidate-portal']);
      }
    })
  }
  onRegister() {
    this.router.navigate(['/register']);
  }
}
