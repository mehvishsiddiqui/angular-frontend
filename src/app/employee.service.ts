import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { AppModule } from './app/app.module';


@Injectable({
  providedIn: 'any'
})
export class EmployeeService {
  // updateEmployee(id: number, employee: any) {
  //   throw new Error('Method not implemented.');
  // }
  

  //injected http client in employee service using constructor
   private baseURL ="http://localhost:8080/api/v1/employees";

  constructor(private httpClient : HttpClient) { }

  getEmployeeList() : Observable<Employee[]>{
   return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }

  createEmployee(employee:Employee):Observable<any>{
    return this.httpClient.post(`${this.baseURL}` , employee)
  }

  getEmployeeById(id : number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }
  

  updateEmployee(id : number , employee : Employee): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}` , employee);
  }

  deleteEmployee(id : number ): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
