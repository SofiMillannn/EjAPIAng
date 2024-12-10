import { TestBed } from '@angular/core/testing';

import { FinalSpaceServiceService } from './final-space-service.service';

describe('FinalSpaceServiceService', () => {
  let service: FinalSpaceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalSpaceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
