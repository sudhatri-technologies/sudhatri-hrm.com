import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
})
export class AddemployeeComponent implements OnInit {
  cities: City[];
  constructor() {
    this.cities = [
      { name: 'Male', code: 'M' },
      { name: 'Female', code: 'FM' },
    ];
  }

  ngOnInit(): void {}
}
