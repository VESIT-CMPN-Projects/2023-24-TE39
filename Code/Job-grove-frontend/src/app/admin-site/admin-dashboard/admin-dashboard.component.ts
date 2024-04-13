import { Component, OnInit } from '@angular/core';
import { CompanyDetails } from 'src/app/shared/interfaces/admin-company.interface';
import { AdminsService } from '../admins.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  companyDetails!: CompanyDetails[];
  pending!: CompanyDetails[];
  registered!: CompanyDetails[];
  rejected!: CompanyDetails[];
  isDisabled:boolean=true;

  constructor(private adminsService: AdminsService,private http: HttpClient,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getCompanyDetails();
    // this.fetchPdf();
  }

  getCompanyDetails(): void {
    this.adminsService.getCompanyDetails().subscribe((value) => {
      console.log(value);
      this.companyDetails = value;
      this.pending = this.filterCompany('Pending');
      this.registered = this.filterCompany('Accepted');
      this.rejected = this.filterCompany('Rejected');
      console.log(this.pending)
      console.log(this.registered)
      console.log(this.rejected)
    });
  }

  filterCompany(status: string): CompanyDetails[] {
    return this.companyDetails.filter(company => company.status === status);
  }
  updateStatus(id:number,ans:string):void{
    this.adminsService.updateStatus(id,ans).subscribe({
      next:(data: any) => {
        alert("Updated Succesfully !!")
      },
      error: (error:any) => {
        alert("Some error ocuured !! Please try again later .")
      },}
    );
  }
  onClick(event: MouseEvent) {
    if (this.isDisabled) {
      event.preventDefault();
    }
  }
  // pdfSrc!: string;
  // safePdfSrc!: SafeResourceUrl;
  // fetchPdf(): void {
  //   const url = 'http://localhost:8080/api/getUploadfiles/angular-demo (15).pdf';
  //   this.http.get(url, { responseType: 'arraybuffer' }).subscribe(
  //     (response: ArrayBuffer) => {
  //       const blob = new Blob([response], { type: 'application/pdf' });
  //       this.pdfSrc = window.URL.createObjectURL(blob);
  //       this.safePdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
  //     },
  //     error => {
  //       console.error('Error fetching PDF:', error);
  //     }
  //   );
  // }
}
