import { TestBed } from '@angular/core/testing';

import { ShipPlacerService } from './ship-placer.service';

describe('ShipPlacerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipPlacerService = TestBed.get(ShipPlacerService);
    expect(service).toBeTruthy();
  });
});
