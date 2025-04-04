import { Component, inject } from '@angular/core';
import { RegisterComponent } from '../user/components/register/register.component';
import { LoginComponent } from '../user/components/login/login.component';
import { TimeService } from '../core/services/time.service';

@Component({
  selector: 'cas-home',
  imports: [RegisterComponent, LoginComponent],
  providers: [TimeService],
  template: `
    <h1>Home</h1>
    <p>Esta es la página de inicio</p>
    @if (!showRegister) {
      <cas-login></cas-login>
      <p>
        Si no tienes cuenta regístrate
        <button (click)="showRegister = !showRegister">aquí</button>
      </p>
    }
    @if (showRegister) {
      <cas-register></cas-register>
      <p>
        Si ya tienes cuenta inicia sesión
        <button (click)="showRegister = !showRegister">aquí</button>
      </p>
    }

    {{ timeService.getTime() }}
  `,
  styles: ``,
})
export default class HomeComponent {
  timeService = inject(TimeService);
  showRegister = false;
}
