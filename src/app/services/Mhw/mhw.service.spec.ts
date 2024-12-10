import { TestBed } from '@angular/core/testing';

import { MhwService } from './mhw.service';

describe('MhwService', () => {
  let service: MhwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MhwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
