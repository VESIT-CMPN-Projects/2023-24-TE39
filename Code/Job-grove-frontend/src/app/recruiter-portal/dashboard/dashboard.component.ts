import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() isExpanded: boolean = false;
  sidebarExpanded = true;
  activeSection: string = 'jobPosting'; // Initialize with default section

  constructor(private router:Router){ }
  setActiveSection(section: string) {
    if(section==='logout'){
      this.isExpanded=false;
      this.sidebarExpanded = false;
      this.router.navigate(['recruiter-login'])
    }
    else{
      this.activeSection = section;
    }
  }
  
}
