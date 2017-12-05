import { TestBed, inject } from '@angular/core/testing';

import { EsbService } from './esb.service';

describe('EsbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsbService]
    });
  });

  it('should be created', inject([EsbService], (service: EsbService) => {
    expect(service).toBeTruthy();
  }));
});
