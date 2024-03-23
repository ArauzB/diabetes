import { TestBed } from '@angular/core/testing';

import { OrdenTrackingService } from './orden-tracking.service';

describe('OrdenTrackingService', () => {
  let service: OrdenTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
