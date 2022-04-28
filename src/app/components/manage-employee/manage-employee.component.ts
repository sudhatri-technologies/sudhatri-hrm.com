import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css'],
})
export class ManageEmployeeComponent implements OnInit {
  employees!: Employee[];

  constructor(private es: EmployeeService) {}

  ngOnInit() {
    this.es.getProducts().then((data) => (this.employees = data));
  }
}
