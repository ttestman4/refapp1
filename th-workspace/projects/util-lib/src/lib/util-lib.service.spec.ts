import { TestBed } from '@angular/core/testing';

import { UtilLibService } from './util-lib.service';

describe('UtilLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilLibService = TestBed.get(UtilLibService);
    expect(service).toBeTruthy();
  });
});
