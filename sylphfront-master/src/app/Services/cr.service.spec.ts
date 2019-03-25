import { TestBed } from '@angular/core/testing';

import { CrService } from './cr.service';

describe('CrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrService = TestBed.get(CrService);
    expect(service).toBeTruthy();
  });
});
