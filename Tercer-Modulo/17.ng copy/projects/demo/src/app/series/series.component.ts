import { Component } from '@angular/core';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'cas-series',
  imports: [ListComponent],
  template: `
    <h2>Series</h2>
    <cas-list></cas-list>
  `,
  styles: ``,
})
export default class SeriesComponent {}
