import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees!: Employee[];
  constructor(private es: EmployeeService) {}

  ngOnInit(): void {
    this.es.getProducts().then((data) => (this.employees = data));
  }
}
