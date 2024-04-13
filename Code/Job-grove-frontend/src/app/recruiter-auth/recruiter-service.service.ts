import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_URL } from '../shared/constants/app.constants';


@Injectable({
  providedIn: 'root'
})
export class RecruiterServiceService {

  constructor(private http : HttpClient) { }

  register(recruiter:any): Observable<any>{
    return this.http.post(API_URL.BACKEND_URL+"recruiter/register",recruiter)
  }

  loginRecruiter(recruiter:any):Observable<any>{
    return this.http.post(API_URL.BACKEND_URL+"recruiter/login",recruiter)
  }
  uploadFile(file : any) : Observable<any>{
    const formData = new FormData();
    formData.append("file",file);
    return this.http.post(API_URL.BACKEND_URL+"recruiter/uploadFile",formData)
  }
}
