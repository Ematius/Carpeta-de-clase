import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


type items = {
  path: string;
  label: string;
}[]

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  items: items = [
    {
      path: '/home',
      label: 'Home',
    },
    {
      path: '/about',
      label: 'About',
    },
    {
      path: '/films',
      label: 'films',
    },
  ];
  isLogin = false;
}
