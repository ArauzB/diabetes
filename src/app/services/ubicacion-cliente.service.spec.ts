import { TestBed } from '@angular/core/testing';

import { UbicacionClienteService } from './ubicacion-cliente.service';

describe('UbicacionClienteService', () => {
  let service: UbicacionClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicacionClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
