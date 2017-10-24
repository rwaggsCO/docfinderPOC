import { TestBed, inject } from '@angular/core/testing';

import { ZipToLocationService } from './zip-to-location.service';

describe('ZipToLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZipToLocationService]
    });
  });

  it('should be created', inject([ZipToLocationService], (service: ZipToLocationService) => {
    expect(service).toBeTruthy();
  }));
});
