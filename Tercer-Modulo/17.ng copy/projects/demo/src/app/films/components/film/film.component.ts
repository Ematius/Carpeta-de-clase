import { Component, inject, input } from '@angular/core';
import { Film } from '../../../core/types/film';
import { StateService } from '../../services/state.service';
import { UserService } from '../../../user/services/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cas-film',
  imports: [RouterModule],
  template: `
    <a [routerLink]="'/film/' + film().id">
      <strong>{{ film().title }}</strong> ({{ film().releaseYear }})

      @if (
        userService.currentUser() &&
        (userService.currentUser()?.role === 'ADMIN' ||
          userService.currentUser()?.role === 'EDITOR')
      ) {
        <button (click)="openEdit()">Editar</button>
        <button (click)="sendDelete()">Eliminar</button>
      }
      @if (isEditing) {
        <ng-content></ng-content>
      }
    </a>
  `,
  styles: `
    a {
      display: block;
      padding: 1rem;
      margin: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-decoration: none;
      color: #333;
    }
  `,
})
export class FilmComponent {
  film = input.required<Film>();
  isEditing = false;
  filmsState = inject(StateService);
  userService = inject(UserService);

  sendDelete() {
    const film = this.film() as Film;
    this.filmsState.deleteFilm(film.id);
  }
  openEdit() {
    this.isEditing = !this.isEditing;
  }
}
