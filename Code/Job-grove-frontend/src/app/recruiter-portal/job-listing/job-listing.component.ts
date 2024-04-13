import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/interfaces/job.interface';
import { RecruiterPortalService } from '../recruiter-portal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {

  jobDetails!: Job[];
  filteredJobDetails!: Job[];
  p: string | number = 1;
  keywordText: string = '' ;
  locationText: string = '';

  constructor(private recruiterPortalService: RecruiterPortalService, private cookieservice: CookieService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.recruiterPortalService.getJobs(this.cookieservice.get("companyId")).subscribe((data: Job[]) => {
      this.jobDetails = data;
      this.filteredJobDetails = data;  // Initialize filteredJobDetails with all jobs initially
    });
  }

  onSearch() {
    console.log("Hii "+this.keywordText, this.locationText)
    this.filteredJobDetails = this.filterJobs();
    console.log(this.filteredJobDetails);
  }

  filterJobs(): Job[] {
    console.log("Filtering with:", this.keywordText, this.locationText);
    if (!this.keywordText && !this.locationText) {
      console.log("No keyword and location");
      return this.jobDetails;
    }
  
    return this.jobDetails.filter(job => {
      const matchesKeyword = this.keywordText ? job.job_title.toLowerCase().includes(this.keywordText.toLowerCase()) || job.job_description.toLowerCase().includes(this.keywordText.toLowerCase()) : true;
      const matchesLocation = this.locationText ? job.job_loc.toLowerCase().includes(this.locationText.toLowerCase()) : true;
      return matchesKeyword && matchesLocation;
    });
  }
  
}
