import { Component, EventEmitter, Output } from '@angular/core';
import { ResumeService } from '../resume.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  @Output() selected: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private router : Router, private resumeService: ResumeService){}
  templates: string[] = [
    '../../../../assets/img/template2.png',
    '../../../../assets/img/template1.png',
  ];
  id!: number;
  selectedTemplate(id:any):void{
    this.resumeService.templateid = id;
    this.router.navigate(['/profile']);
  }
}
