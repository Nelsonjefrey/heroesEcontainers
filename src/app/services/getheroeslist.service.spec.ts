import { TestBed } from '@angular/core/testing';

import { GetheroeslistService } from './getheroeslist.service';

describe('GetheroeslistService', () => {
  let service: GetheroeslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetheroeslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
