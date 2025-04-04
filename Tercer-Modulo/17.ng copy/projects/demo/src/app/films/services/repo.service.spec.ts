import { TestBed } from '@angular/core/testing';

import { RepoService } from './repo.service';
import { HttpClientModule } from '@angular/common/http';

describe('RepoService', () => {
  let service: RepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
