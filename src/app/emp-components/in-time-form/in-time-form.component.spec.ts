import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTimeFormComponent } from './in-time-form.component';

describe('InTimeFormComponent', () => {
  let component: InTimeFormComponent;
  let fixture: ComponentFixture<InTimeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTimeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InTimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
