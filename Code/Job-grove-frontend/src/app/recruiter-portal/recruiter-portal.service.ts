import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class RecruiterPortalService {
  constructor(private http : HttpClient) { }

  postJob(job:any): Observable<any>{
    return this.http.post(API_URL.BACKEND_URL+"recruiter/post-job",job)
  }

  getSector():Observable<any>{
    return this.http.get(API_URL.BACKEND_URL+"recruiter/sector")
  }
  uploadFile(file : any) : Observable<any>{
    const formData = new FormData();
    formData.append("file",file);
    return this.http.post(API_URL.BACKEND_URL+"recruiter/uploadFile",formData)
  }

  getJobs(companyId:string):Observable<any>{
    let params = new HttpParams().set('companyId', companyId);
    return this.http.get<any>(API_URL.BACKEND_URL+"recruiter/jobListing",{ params: params})
  }

  getCandidates(recruiterId:string):Observable<any>{
    let params = new HttpParams().set('recruiterId', recruiterId);
    return this.http.get<any>(API_URL.BACKEND_URL+"recruiter/candidateListing",{ params: params})
  }
}
