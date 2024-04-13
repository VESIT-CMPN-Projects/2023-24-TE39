import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recruiter-nav',
  templateUrl: './recruiter-nav.component.html',
  styleUrls: ['./recruiter-nav.component.css']
})
export class RecruiterNavComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  handleSidebarToggle(){
    this.toggleSidebar.emit(!this.isExpanded);
    console.log(this.isExpanded)
    // console.log(this.toggleSidebar)
  }
}
