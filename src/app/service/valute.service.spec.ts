import { TestBed } from '@angular/core/testing';

import { ValuteService } from './valute.service';

describe('ValuteService', () => {
  let service: ValuteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
