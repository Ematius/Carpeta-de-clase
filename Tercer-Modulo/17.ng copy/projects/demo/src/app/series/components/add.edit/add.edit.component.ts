import { Component, input, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Serie } from '../../types/serie';

@Component({
  selector: 'cas-add-edit',
  imports: [FormsModule],
  template: `
    <!-- @if (isAdding) {
      <h3>Add serie</h3>
    } @else {
      <h3>Edit serie</h3>
    } -->

    <h3>{{ isAdding() ? 'Add' : 'Edit' }} serie</h3>

    <form (ngSubmit)="sendEvent()">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        [(ngModel)]="serieData.title"
        required
      />
      <label for="year">Year</label>
      <input
        type="number"
        id="year"
        name="year"
        [(ngModel)]="serieData.releaseYear"
        required
      />
      <button type="submit">{{ isAdding() ? 'Add' : 'Edit' }}</button>
    </form>
  `,
  styles: ``,
})
export class AddEditComponent implements OnInit {
  serie = input<Serie>({
    id: '',
    title: '',
    releaseYear: 0,
  });

  serieData!: Serie;

  isAdding = input.required<boolean>();

  addEvent = output<Serie>();
  editEvent = output<Serie>();

  ngOnInit(): void {
    this.serieData = structuredClone(this.serie());
  }

  sendEvent() {
    if (this.isAdding()) {
      this.serie().id = crypto.randomUUID();
      this.addEvent.emit({ ...this.serieData });
    } else {
      this.editEvent.emit({ ...this.serieData });
    }
  }
}
