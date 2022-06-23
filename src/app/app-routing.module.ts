import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsentEmployeesComponent } from './components/absent-employees/absent-employees.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { ApplyleaveComponent } from './components/applyleave/applyleave.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { BioDataComponent } from './components/bio-data/bio-data.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManageEmployeeComponent } from './components/manage-employee/manage-employee.component';
import { ManageLeaveComponent } from './components/manage-leave/manage-leave.component';
import { PresentEmployeesComponent } from './components/present-employees/present-employees.component';
import { EmpSidenavComponent } from './emp-components/emp-sidenav/emp-sidenav.component';
import { InTimeFormComponent } from './emp-components/in-time-form/in-time-form.component';
import { OutTimeFormComponent } from './emp-components/out-time-form/out-time-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'timesheet',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'bio-data',
    component: BioDataComponent,
  },
  {
    path: 'leave',
    component: ApplyleaveComponent,
  },
  {
    path: 'addemployee',
    component: AddemployeeComponent,
  },
  {
    path: 'manage-employee',
    component: ManageEmployeeComponent,
  },
  {
    path: 'manage-leave',
    component: ManageLeaveComponent,
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'present-employees',
    component: PresentEmployeesComponent,
  },
  {
    path: 'absent-employees',
    component: AbsentEmployeesComponent,
  },
  {
    path: 'emp-sidenav',
    component: EmpSidenavComponent,
  },
  {
    path: 'in-time-form',
    component: InTimeFormComponent,
  },
  {
    path: 'out-time-form',
    component: OutTimeFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
