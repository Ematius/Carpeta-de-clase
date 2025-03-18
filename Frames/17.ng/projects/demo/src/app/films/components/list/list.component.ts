import { Component, inject } from '@angular/core';
import { AddEditComponent } from '../add.edit/add.edit.component';
import { FilmComponent } from '../film/film.component';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'cas-list',
  imports: [AddEditComponent, FilmComponent],
  template: `
    <cas-add-edit [isAdding]="true"></cas-add-edit>
    <h3>Listado de películas</h3>
    <ul>
      @for (film of films(); track film.id) {
        <li>
          <cas-film [film]="film">
            <cas-add-edit [isAdding]="false" [film]="film"></cas-add-edit>
          </cas-film>
        </li>
      }
    </ul>
  `,
  styles: `
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 10px;
      margin-top: 10px;
    }
  `,
})
export class ListComponent {
  filmsState = inject(StateService);
  films = this.filmsState.getFilms();

  // films: WritableSignal<Film[]>;
  //constructor() {
  // this.films = this.filmsState.getFilms();
  //}
}
