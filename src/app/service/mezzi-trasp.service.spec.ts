import { TestBed } from '@angular/core/testing';

import { MezziTraspService } from './mezzi-trasp.service';

describe('MezziTraspService', () => {
  let service: MezziTraspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MezziTraspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
