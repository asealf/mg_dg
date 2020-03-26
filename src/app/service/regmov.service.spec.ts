import { TestBed } from '@angular/core/testing';

import { RegmovService } from './regmov.service';

describe('RegmovService', () => {
  let service: RegmovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegmovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
