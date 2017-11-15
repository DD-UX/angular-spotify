import { TestBed, async, inject } from '@angular/core/testing';

import { AccessTokenValidGuard } from './access-token-valid.guard';

describe('AccessTokenValidGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessTokenValidGuard]
    });
  });

  it('should ...', inject([AccessTokenValidGuard], (guard: AccessTokenValidGuard) => {
    expect(guard).toBeTruthy();
  }));
});
