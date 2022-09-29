import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEmployee} from '../model/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
  public BASE_API = 'http://localhost:8080/';
  public API_EMPLOYEE_LIST: string = this.BASE_API + 'employees';
  constructor(public http: HttpClient) {}

  getAllEmployees(): Observable<any>{
    return this.http.get<IEmployee[]>(this.API_EMPLOYEE_LIST);
  }
}
