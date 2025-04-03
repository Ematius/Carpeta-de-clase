import { computed, inject, Injectable, signal } from '@angular/core';
import { Film } from '../../core/types/film';
import { RepoService } from './repo.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _films = signal<Film[]>([]);
  private films = computed(() => this._films());
  repo = inject(RepoService);
  constructor() {
    this.repo.loadFilms().subscribe((films) => {
      this._films.set(films);
      console.log(this._films());
    });
  }

  getFilms() {
    return this.films;
  }

  getFilm(id: string) {
    const film = this.films().find((film) => film.id === id);
    let film$;
    if (film) {
      film$ = of([film]);
    } else {
      film$ = this.repo.getFilmById(id);
    }
    return film$;
  }

  deleteFilm(id: string) {
    this.repo.deleteFilm(id).subscribe({
      next: () => {
        this._films.set(this._films().filter((film) => film.id !== id));
      },
      error: (error) => {
        console.error('Error deleting film', error);
      },
    });
  }

  addFilm(film: Omit<Film, 'id'>) {
    this.repo.createFilm(film).subscribe({
      next: (film) => {
        this._films.set([...this._films(), film]);
      },
      error: (error) => {
        console.error('Error creating film', error);
      },
    });
  }

  updateFilm(film: Film) {
    this.repo.updateFilm(film).subscribe({
      next: (film) => {
        this._films.set(
          this._films().map((f) =>
            f.id === film.id
              ? { ...f, title: film.title, releaseYear: film.releaseYear }
              : f,
          ),
        );
      },
      error: (error) => {
        console.error('Error updating film', error);
      },
    });
  }
}
