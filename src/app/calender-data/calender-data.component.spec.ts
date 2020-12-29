import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderDataComponent } from './calender-data.component';

describe('CalenderDataComponent', () => {
  let component: CalenderDataComponent;
  let fixture: ComponentFixture<CalenderDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
