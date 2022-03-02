import { TestBed } from '@angular/core/testing';

import { DarkModeSaveService } from './dark-mode-save.service';

describe('DarkModeSaveService', () => {
  let service: DarkModeSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkModeSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
