import { TestBed } from '@angular/core/testing';

import { OkenaService } from './okena.service';

describe('OkenaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OkenaService = TestBed.get(OkenaService);
    expect(service).toBeTruthy();
  });
});
