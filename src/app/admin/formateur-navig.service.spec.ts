import { TestBed } from '@angular/core/testing';

import { FormateurNavigService } from './formateur-navig.service';

describe('FormateurNavigService', () => {
  let service: FormateurNavigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormateurNavigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
