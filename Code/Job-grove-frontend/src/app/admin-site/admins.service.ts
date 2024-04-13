import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  constructor(private http:HttpClient) { }
  loginAdmin(data:any):Observable<any>{
    return this.http.post(API_URL.BACKEND_URL+"admin-login",data);
  }
  getCompanyDetails():Observable<any>{
    return this.http.get(API_URL.BACKEND_URL+"admin-company");
  }
  updateStatus(data:number,ans:string):Observable<any>{
    return this.http.post(API_URL.BACKEND_URL+"update-status",{data,ans});
  }
  
}
