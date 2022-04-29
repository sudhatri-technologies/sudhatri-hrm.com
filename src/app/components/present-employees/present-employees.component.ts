import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-present-employees',
  templateUrl: './present-employees.component.html',
  styleUrls: ['./present-employees.component.css'],
})
export class PresentEmployeesComponent implements OnInit {
  employees!: Employee[];
  constructor(private es: EmployeeService) {}

  ngOnInit(): void {
    this.es.getProducts().then((data) => (this.employees = data));
  }
}
