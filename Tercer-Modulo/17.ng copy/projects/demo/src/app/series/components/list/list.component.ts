import { Component } from '@angular/core';
import { AddEditComponent } from '../add.edit/add.edit.component';
import { SerieComponent } from '../serie/serie.component';
import { Serie } from '../../types/serie';
import { SERIES } from '../../../../../data/series';

@Component({
  selector: 'cas-list',
  imports: [AddEditComponent, SerieComponent],
  template: `
    <cas-add-edit
      [isAdding]="true"
      (addEvent)="addSerie($event)"
    ></cas-add-edit>
    <h3>Listado de series</h3>
    <ul>
      @for (serie of series; track serie.id) {
        <li>
          <cas-serie [serie]="serie" (eventDelete)="deleteSerie($event)">
            <cas-add-edit
              [isAdding]="false"
              [serie]="serie"
              (editEvent)="updateSerie($event)"
            ></cas-add-edit>
          </cas-serie>
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
  series: Serie[] = SERIES;
  data = structuredClone(this.series);

  deleteSerie(id: string) {
    this.series = this.series.filter((serie) => serie.id !== id);
  }

  addSerie(serie: Serie) {
    this.series = [...this.series, serie];
  }
  updateSerie(serie: Serie) {
    this.series = this.series.map((f) =>
      f.id === serie.id
        ? { ...f, title: serie.title, releaseYear: serie.releaseYear }
        : f,
    );
  }
}
