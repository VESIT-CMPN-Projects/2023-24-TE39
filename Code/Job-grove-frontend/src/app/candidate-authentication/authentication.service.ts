import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  registerUser(user: any, resume: any): Observable<any> {
    const data = { "user": user, "resume": resume };
    return this.http.post(API_URL.BACKEND_URL + "register", data)
  }
  uploadFile(file: any): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(API_URL.BACKEND_URL + "uploadFile", formData)
  }
  validateUser(user: any): Observable<any> {
    return this.http.post(API_URL.BACKEND_URL + "login", user)
  }
}
