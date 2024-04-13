import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-sidebar',
  templateUrl: './recruiter-sidebar.component.html',
  styleUrls: ['./recruiter-sidebar.component.css']
})
export class RecruiterSidebarComponent {
  @Output() activeItemChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router:Router){ }
  setActiveItem(active: string) {
    this.activeItemChanged.emit(active);
    if(active==='logout'){
      this.router.navigate(['recruiter-login'])
    }
    console.log(active)
    
  }
}
