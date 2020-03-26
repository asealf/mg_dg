import { TestBed } from '@angular/core/testing';

import { DittaService } from './ditta.service';

describe('DittaService', () => {
  let service: DittaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DittaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
