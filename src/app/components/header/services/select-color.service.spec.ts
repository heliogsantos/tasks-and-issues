import { TestBed } from '@angular/core/testing';

import { SelectColorService } from './select-color.service';

describe('SelectColorService', () => {
  let service: SelectColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
