import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsViewComponent } from './visits-view.component';

describe('VisitsViewComponent', () => {
  let component: VisitsViewComponent;
  let fixture: ComponentFixture<VisitsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
