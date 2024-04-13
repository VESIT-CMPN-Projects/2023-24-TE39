import { TestBed } from '@angular/core/testing';

import { RecruiterPortalService } from './recruiter-portal.service';

describe('RecruiterPortalService', () => {
  let service: RecruiterPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruiterPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
