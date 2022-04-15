import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { BioDataComponent } from './components/bio-data/bio-data.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { EditorModule } from 'primeng/editor';
import { ApplyleaveComponent } from './components/applyleave/applyleave.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';

const allImports = [
  ButtonModule,
  InputTextModule,
  SidebarModule,
  CalendarModule,
  InputTextareaModule,
  EditorModule,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    allImports,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
