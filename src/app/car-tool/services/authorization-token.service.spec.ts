import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationTokenService } from './authorization-token.service';

describe('AuthorizationTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationTokenService]
    });
  });

  it('should be created', inject([AuthorizationTokenService], (service: AuthorizationTokenService) => {
    expect(service).toBeTruthy();
  }));
});
