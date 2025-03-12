import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  {
    path: 'home',
    loadComponent: () => import('./feature/home/home.component'),
  },
  {
    path: 'films',
    loadComponent: () => import('./feature/films/films.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./feature/about/about.component'),
  },

  { path: '**',  redirectTo: 'Home' },

];
