import { Component, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuItem } from '../../../app.component';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'cas-menu',
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (item of items(); track item.path) {
          <li>
            <a [routerLink]="item.path" routerLinkActive="active">{{
              item.label
            }}</a>
          </li>
        }
        @if (isLogin) {
          <li>
            <a [routerLink]="'/profile'">Profile</a>
          </li>
          <li>
            <a (click)="logout($event)" href="/">Logout</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
    :host {
      display: block;
    }
    nav {
      background-color: #333;
      color: white;
    }
    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding: 0;
    }
    li {
      padding: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .active {
      font-weight: bold;
      transform: scale(1.2);
    }
  `,
})
export class MenuComponent {
  // @Input() items: MenuItem[] = [];
  items = input<MenuItem[]>();
  userService = inject(UserService);
  isLogin = this.userService.token !== null;

  logout(event: Event) {
    event.preventDefault();
    localStorage.removeItem('token');
    location.href = '/';
  }
}
