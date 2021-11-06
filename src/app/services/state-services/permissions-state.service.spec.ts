import { TestBed } from '@angular/core/testing';

import { PermissionsStateService } from './permissions-state.service';

describe('PermissionsStateService', () => {
  let service: PermissionsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
