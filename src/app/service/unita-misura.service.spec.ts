import { TestBed } from '@angular/core/testing';

import { UnitaMisuraService } from './unita-misura.service';

describe('UnitaMisuraService', () => {
  let service: UnitaMisuraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitaMisuraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
