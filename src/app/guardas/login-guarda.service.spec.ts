import { TestBed } from '@angular/core/testing';

import { LoginGuardaService } from './login-guarda.service';

describe('LoginGuardaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginGuardaService = TestBed.get(LoginGuardaService);
    expect(service).toBeTruthy();
  });
});
