import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitStepperComponent } from './visit-stepper.component';

describe('VisitStepperComponent', () => {
  let component: VisitStepperComponent;
  let fixture: ComponentFixture<VisitStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
