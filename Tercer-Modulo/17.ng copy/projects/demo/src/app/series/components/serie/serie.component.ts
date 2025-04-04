import { Component, input, output } from '@angular/core';
import { Serie } from '../../types/serie';

@Component({
  selector: 'cas-serie',
  imports: [],
  template: `
    <div>
      <strong>{{ serie().title }}</strong> ({{ serie().releaseYear }})
      <button (click)="openEdit()">Editar</button>
      <button (click)="sendDelete()">Eliminar</button>
      @if (isEditing) {
        <ng-content></ng-content>
      }
    </div>
  `,
  styles: ``,
})
export class SerieComponent {
  serie = input.required<Serie>();
  eventDelete = output<string>();
  isEditing = false;

  sendDelete() {
    const serie = this.serie() as Serie;
    this.eventDelete.emit(serie.id);
  }
  openEdit() {
    this.isEditing = !this.isEditing;
  }
}
