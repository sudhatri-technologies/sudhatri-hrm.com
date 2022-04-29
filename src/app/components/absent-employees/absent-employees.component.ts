import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-absent-employees',
  templateUrl: './absent-employees.component.html',
  styleUrls: ['./absent-employees.component.css'],
})
export class AbsentEmployeesComponent implements OnInit {
  employees!: Employee[];
  constructor(private es: EmployeeService) {}

  ngOnInit(): void {
    this.es.getProducts().then((data) => (this.employees = data));
  }
}
