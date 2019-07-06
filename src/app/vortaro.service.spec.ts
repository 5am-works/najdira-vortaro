import { TestBed } from '@angular/core/testing';

import { VortaroService } from './vortaro.service';

describe('VortaroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VortaroService = TestBed.get(VortaroService);
    expect(service).toBeTruthy();
  });
});
