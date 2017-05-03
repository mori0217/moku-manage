import { TestBed, inject } from '@angular/core/testing';

import { MokuService } from './moku.service';

describe('MokuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MokuService]
    });
  });

  it('should ...', inject([MokuService], (service: MokuService) => {
    expect(service).toBeTruthy();
  }));
});
