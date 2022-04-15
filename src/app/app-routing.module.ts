import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { ApplyleaveComponent } from './components/applyleave/applyleave.component';
import { BioDataComponent } from './components/bio-data/bio-data.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

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
    path:'addemployee',
    component:AddemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
