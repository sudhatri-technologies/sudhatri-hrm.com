import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutTimeFormComponent } from './out-time-form.component';

describe('OutTimeFormComponent', () => {
  let component: OutTimeFormComponent;
  let fixture: ComponentFixture<OutTimeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutTimeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutTimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
