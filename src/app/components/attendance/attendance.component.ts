import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

interface Status {
  name: string;
  code: string;
}
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  employees!: Employee[];
  dailyStatus: Status[];
  

  constructor(private es: EmployeeService) {
    
    this.dailyStatus = [
      { name: 'Present', code: 'PR' },
      { name: 'Absent', code: 'AB' },
      { name: 'Weekly Off', code: 'WO' },
    ];
  }

  ngOnInit(): void {
    this.es.getProducts().then((data) => (this.employees = data));
  }
}
