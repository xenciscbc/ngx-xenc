import { TestBed, inject } from '@angular/core/testing';

import { NgxXencLoadingService } from './ngx-xenc-loading.service';

describe('NgxXencLoadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxXencLoadingService]
    });
  });

  it('should be created', inject([NgxXencLoadingService], (service: NgxXencLoadingService) => {
    expect(service).toBeTruthy();
  }));
});
