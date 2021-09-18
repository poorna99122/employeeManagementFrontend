import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';



//@Injectable denotes that this is a typescript class 
//which acts like a service to all components and also it can be injected in to various components

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8083/employeeManagement/v1/employees";
  constructor(private httpClient : HttpClient) { }

  
  getEmployeesList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
}
