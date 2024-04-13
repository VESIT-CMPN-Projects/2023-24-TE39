import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from '../shared/interfaces/sector.interface';
import { JobLocation } from '../shared/interfaces/job-location.interface';
import { Job } from '../shared/interfaces/job.interface';
import { API_URL } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {

  constructor(private http: HttpClient) { }
  getCategory(): Observable<Sector[]> {
    return this.http.get<Sector[]>(API_URL.BACKEND_URL + "category", { withCredentials: true })
  }
  getLocation(): Observable<JobLocation[]> {
    return this.http.get<JobLocation[]>(API_URL.BACKEND_URL + "location", { withCredentials: true })
  }
  getJob(): Observable<Job[]> {
    return this.http.get<Job[]>(API_URL.BACKEND_URL + "job", { withCredentials: true })
  }
  applyJob(candidateId: number, jobId: number): Observable<any> {
    return this.http.post(API_URL.BACKEND_URL + "applyJob", { candidateId, jobId }, { withCredentials: true })
  }
  getRecommendations(candidateId: number): Observable<any> {
    return this.http.post("http://localhost:8000/api/recommend", { candidateId })
  }
}
