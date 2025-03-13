import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  {
    path: 'home',
    loadComponent: () => import('./feature/home/home.component'),
    title: 'Home | Angular Demo',
    data: { label: 'Home' },
  },
  {
    path: 'films',
    loadComponent: () => import('./feature/films/films.component'),
    title: 'Films | Angular Demo',
    data: { label: 'Films' },
  },
  {
    path: 'about',
    loadComponent: () => import('./feature/about/about.component'),
    title: 'About | Angular Demo',
    data: { label: 'About' },
  },

  { path: '**',  redirectTo: 'Home' },

];
