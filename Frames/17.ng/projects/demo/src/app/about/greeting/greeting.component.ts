import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cas-greeting',
  imports: [FormsModule],
  template: `
    <p>Hola {{ user || 'amigo' }}</p>
    <!-- <input
      type="text"
      placeholder="Escribe tu nombre"
      [value]="user"
      (input)="setUserName($event)"
    /> -->
    <input type="text" placeholder="Escribe tu nombre" [(ngModel)]="user" />
    <button (click)="clean()">Borrar</button>
  `,
  styles: `
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
  `,
})
export class GreetingComponent {
  user = '';
  clean() {
    this.user = '';
  }

  // setUserName(event: Event) {
  //   const target: HTMLInputElement = event.target as HTMLInputElement;
  //   this.user = target.value;
  // }
}
