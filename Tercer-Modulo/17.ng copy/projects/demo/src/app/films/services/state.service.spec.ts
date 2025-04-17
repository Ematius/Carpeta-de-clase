import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { RepoService } from './repo.service';
import { HttpClientModule } from '@angular/common/http';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        RepoService,
        //{
        // provide: RepoService,

        // useValue: {
        //   getFilms: () => [],
        //   getFilm: () => [],
        //   deleteFilm: () => {},
        //   addFilm: () => {},
        //   updateFilm: () => {},
        // },
        //},
      ],
    });
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
