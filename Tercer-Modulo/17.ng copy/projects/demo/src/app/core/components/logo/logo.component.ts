import { Component } from '@angular/core';

@Component({
  selector: 'cas-logo',
  imports: [],
  templateUrl: './logo.svg',
  styles: `
    :host {
      display: block;
      width: 5rem;
      height: 5rem;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `,
})
export class LogoComponent {}
