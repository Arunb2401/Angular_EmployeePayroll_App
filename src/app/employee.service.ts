import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';


@Injectable({providedIn: 'root'})
export class EmployeeService {
 
  
  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<any>{
    return this.httpClient.get<any>(environment.baseUrl );
  }
  postEmployeesList(employee:Employee): Observable<any>{
    return this.httpClient.post<any>(environment.baseUrl + "/create",employee);
  }
} 


