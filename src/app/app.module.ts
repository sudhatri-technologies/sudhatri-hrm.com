import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';

import { TableModule } from 'primeng/table';
import { BioDataComponent } from './components/bio-data/bio-data.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ApplyleaveComponent } from './components/applyleave/applyleave.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { ManageEmployeeComponent } from './components/manage-employee/manage-employee.component';
import { ManageLeaveComponent } from './components/manage-leave/manage-leave.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PresentEmployeesComponent } from './components/present-employees/present-employees.component';
import { AbsentEmployeesComponent } from './components/absent-employees/absent-employees.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';

const allImports = [
  ButtonModule,
  InputTextModule,
  SidebarModule,
  CalendarModule,
  InputTextareaModule,
  EditorModule,
  TableModule,
  DropdownModule,
  InputNumberModule,
  FileUploadModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BioDataComponent,
    SidenavComponent,
    ApplyleaveComponent,
    DashboardComponent,
    AddemployeeComponent,
    ManageEmployeeComponent,
    ManageLeaveComponent,
    AttendanceComponent,
    DepartmentsComponent,
    EmployeesComponent,
    PresentEmployeesComponent,
    AbsentEmployeesComponent,
    CardDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    allImports,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
