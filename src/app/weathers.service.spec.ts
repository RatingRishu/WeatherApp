import { TestBed } from '@angular/core/testing';

import { WeathersService } from './weathers.service';

describe('WeathersService', () => {
  let service: WeathersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
