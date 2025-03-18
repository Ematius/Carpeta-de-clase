import { Component, signal } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { GreetingComponent } from './greeting/greeting.component';
import { CounterSignalComponent } from './counter.signal/counter.signal.component';

@Component({
  selector: 'cas-about',
  imports: [CounterComponent, GreetingComponent, CounterSignalComponent],
  template: `
    <h2>About</h2>
    <p>Esta aplicación es una demo del uso de Angular</p>
    <p>A continuación, un ejemplo de componente contador</p>
    <cas-counter (countEvent)="setCounter()"></cas-counter>
    <p>A continuación, un ejemplo de componente contador con Signals</p>
    <cas-counter-signal (countEvent)="setCounter()"></cas-counter-signal>
    <p>Total de clicks: {{ clicks() }}</p>
    <p>A continuación, un ejemplo de un componente que saluda al usuario</p>
    <cas-greeting></cas-greeting>
  `,
  styles: ``,
})
export default class AboutComponent {
  clicks = signal(0);

  setCounter() {
    this.clicks.update((prev) => prev + 1);
  }
}
