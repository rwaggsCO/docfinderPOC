import { TestBed, inject } from '@angular/core/testing';

import { DocFinderService } from './docfinder.service';

describe('DocFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [DocFinderService]
    });
  });

  it('should be created', inject([DocFinderService], (service: DocFinderService) => {
    expect(service).toBeTruthy();
  }));
});
