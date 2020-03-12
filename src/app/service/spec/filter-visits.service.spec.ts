import { TestBed } from '@angular/core/testing';

import { FilterVisitsService } from '../filter-visits.service';

describe('FilterVisitsService', () => {
  let service: FilterVisitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterVisitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
