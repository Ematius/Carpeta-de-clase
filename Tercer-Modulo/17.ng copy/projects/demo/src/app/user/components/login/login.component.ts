import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'cas-login',
  imports: [FormsModule],
  template: ` <h3>Login</h3>
    <form (ngSubmit)="onSubmit()">
      <label for="email">User email</label>
      <input
        type="email"
        id="email"
        [(ngModel)]="user.email"
        name="email"
        required
      />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        [(ngModel)]="user.password"
        name="password"
        required
      />
      <button type="submit">Login</button>
    </form>`,
  styles: ``,
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  userService = inject(UserService);

  onSubmit() {
    this.userService.login(this.user);
  }
}
