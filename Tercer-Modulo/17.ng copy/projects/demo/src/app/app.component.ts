import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { routes } from './app.routes';
import { UserService } from './user/services/user.service';

export type MenuItem = {
  path: string;
  label: string;
};

@Component({
  selector: 'cas-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent],
  template: `
    <cas-header>
      <cas-menu [items]="routes" />
    </cas-header>
    <main>
      <router-outlet />
      <!-- Página elegida -->
    </main>
    <cas-footer />
  `,
  styles: [
    `
      main {
        margin: 3rem;
      }
    `,
  ],
})
export class AppComponent {
  routes: MenuItem[];
  userService = inject(UserService);
  constructor() {
    this.userService.getToken();
    this.routes = routes
      .filter((route) => route.data)
      .map((route) => ({
        path: route.path!,
        label: route.data!['label'] as string,
      }));
  }

  // routes: MenuItem[] = this.setRoutes();
  // private setRoutes() {
  //   return routes
  //     .filter((route) => route.path !== '**' && route.path !== '')
  //     .map((route) => ({
  //       path: route.path!,
  //       label: route.data!['label'] as string,
  //     }));
  // }
}
