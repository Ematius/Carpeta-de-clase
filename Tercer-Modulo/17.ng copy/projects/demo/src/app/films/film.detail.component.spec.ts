import { ComponentFixture, TestBed } from '@angular/core/testing';

import FilmDetailComponent from './film.detail.component';
import { StateService } from './services/state.service';
import { of } from 'rxjs';

const mockStateService = {
  getFilm: (id: string) =>
    of([
      {
        id: id,
        title: 'Film Title',
        description: 'Film Description',
        releaseYear: 2023,
        duration: 120,
        director: 'Director Name',
        rating: 5,
        poster: 'poster.jpg',
      },
    ]),
};

fdescribe('FilmDetailComponent', () => {
  let component: FilmDetailComponent;
  let fixture: ComponentFixture<FilmDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmDetailComponent],
      providers: [{ provide: StateService, useValue: mockStateService }],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
