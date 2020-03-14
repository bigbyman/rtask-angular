import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddVisitComponent} from './add-visit.component';
import {PatientService} from '../../service/patient.service';
import {HttpClientModule} from '@angular/common/http';

describe('AddVisitComponent', () => {
  let component: AddVisitComponent;
  let fixture: ComponentFixture<AddVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddVisitComponent],
      imports: [HttpClientModule],
      providers: [PatientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
