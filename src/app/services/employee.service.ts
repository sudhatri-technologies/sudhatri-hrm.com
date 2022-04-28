import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<any>('/assets/data/employee.json')
      .toPromise()
      .then((res) => <Employee[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
