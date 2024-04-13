import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/shared/interfaces/candidate.interface';
import { RecruiterPortalService } from '../recruiter-portal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit{
  
  candidateDetails!:Candidate[]
  p: string|number=1;
  constructor(private recruiterPortalService: RecruiterPortalService,private cookieservice:CookieService){ }


  ngOnInit(): void {
    this.getCandidates()
  }

  getCandidates(){
    this.recruiterPortalService.getCandidates("1").subscribe((data)=>{
      this.candidateDetails=data
    })
  }

}
