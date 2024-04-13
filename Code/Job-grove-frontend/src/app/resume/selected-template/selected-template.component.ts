import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeService } from '../resume.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { TemplateComponent } from '../template/template.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-template',
  templateUrl: './selected-template.component.html',
  styleUrls: ['./selected-template.component.css']
})
export class SelectedTemplateComponent {
  data: any;

  id!: number
  downloadClicked: boolean = false;
  resumeData!: FormGroup;
  constructor(private resumeService: ResumeService, private router: Router, private route : ActivatedRoute) {
    this.resumeData = this.resumeService.resumeForm;
    this.id = this.resumeService.templateid;
  }
  isResumeDataAvailable(): boolean {
    return !this.resumeData;
  }

  ngOnInit(): void {
    
  }

  public openPDF(): void {
    this.downloadClicked = true
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA,{scale: 2}).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('pdf');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'pdf', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
    this.router.navigate(['/register'])
  }
}
