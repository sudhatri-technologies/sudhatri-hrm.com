import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<any>('assets/data/departments.json')
      .toPromise()
      .then((res) => <Department[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
