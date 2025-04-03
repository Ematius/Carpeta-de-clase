import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cas-footer',
  imports: [DatePipe],
  template: `
    <p>{{ today.toLocaleDateString() }} - {{ today.toLocaleTimeString() }}</p>
    <!-- <p>{{ today | date: 'fullDate' : '' : 'es' }}</p> -->
    <p>{{ today | date: 'fullDate' }}</p>
  `,
  styles: `
    :host {
      display: block;
      text-align: center;
    }
  `,
})
export class FooterComponent {
  today = new Date();
}
