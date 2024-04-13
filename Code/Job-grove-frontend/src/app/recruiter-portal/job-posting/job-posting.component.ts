import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecruiterPortalService } from '../recruiter-portal.service';
import { Router } from '@angular/router';
import { Sector } from 'src/app/shared/interfaces/sector.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent implements OnInit{
  jobData!: FormGroup;
  jdURL: string = '';
  sector!:Sector[]

  constructor(
    private recruiterPortalService: RecruiterPortalService,
    private cookieService: CookieService,
    private router: Router
  ) {
    // Initialize the form group
    this.jobData = new FormGroup({
      jobTitle: new FormControl(''),
      jobDescription: new FormControl(''),
      salary: new FormControl(''),
      jobRequirement: new FormControl(''),
      jobType: new FormControl(''),
      startDate: new FormControl('2024-05-15'),
      companyId: new FormControl(+this.cookieService.get("companyId")),
      sectorId: new FormControl(''),
      jdURL: new FormControl(''),
      location:new FormControl(''),
      applicationDeadline:new FormControl('2024-05-30')
    });

  }
  ngOnInit(): void {
    this.recruiterPortalService.getSector().subscribe((sector)=>{
      this.sector=sector
    })
  }

  postJob(){
    this.recruiterPortalService.uploadFile(this.jdURL).subscribe((data)=>{
      this.recruiterPortalService.postJob(this.jobData.value).subscribe((data)=>{
        console.log(data)
      })
    })
  }

  selectSector(sector:Sector){
    this.jobData.patchValue({
      sectorId: sector.id
    });
  }

  selectJobType(jobtype:string){
    this.jobData.patchValue({
      jobType: jobtype
    });
  }
  readJdURL(event:any){
    this.jdURL = event.target.files[0];
    console.log(event.target.files);
    this.jobData.patchValue({
      jdURL: event.target.files[0].name
    });
  }

}
