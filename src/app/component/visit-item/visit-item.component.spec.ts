import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitItemComponent } from './visit-item.component';

describe('VisitItemComponent', () => {
  let component: VisitItemComponent;
  let fixture: ComponentFixture<VisitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
