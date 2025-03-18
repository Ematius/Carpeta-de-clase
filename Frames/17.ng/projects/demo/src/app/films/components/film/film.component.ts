import { Component, inject, input } from '@angular/core';
import { Film } from '../../types/film';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'cas-film',
  imports: [],
  template: `
    <div>
      <strong>{{ film().title }}</strong> ({{ film().releaseYear }})
      <button (click)="openEdit()">Editar</button>
      <button (click)="sendDelete()">Eliminar</button>
      @if (isEditing) {
        <ng-content></ng-content>
      }
    </div>
  `,
  styles: ``,
})
export class FilmComponent {
  film = input.required<Film>();
  isEditing = false;
  filmsState = inject(StateService);

  sendDelete() {
    const film = this.film() as Film;
    this.filmsState.deleteFilm(film.id);
  }
  openEdit() {
    this.isEditing = !this.isEditing;
  }
}
