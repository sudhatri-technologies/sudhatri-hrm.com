import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/department';
import { DepartmentService } from 'src/app/services/department.service';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})
export class DepartmentsComponent implements OnInit {
  departments!: Department[];
  constructor(private dept: DepartmentService) {}

  ngOnInit() {
    this.dept.getProducts().then((data) => (this.departments = data));
  }
}
