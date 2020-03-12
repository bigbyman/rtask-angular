import { TestBed } from '@angular/core/testing';

import { FilterPatientsService } from '../filter-patients.service';

describe('FilterPatientsService', () => {
  let service: FilterPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
