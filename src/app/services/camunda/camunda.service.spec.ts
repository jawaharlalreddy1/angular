import { TestBed, inject } from '@angular/core/testing';

import { CamundaService } from './camunda.service';

describe('CamundaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamundaService]
    });
  });

  it('should be created', inject([CamundaService], (service: CamundaService) => {
    expect(service).toBeTruthy();
  }));
});
