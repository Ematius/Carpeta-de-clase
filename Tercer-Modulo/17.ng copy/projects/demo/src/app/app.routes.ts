import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
    title: 'Home | Angular Demo',
    data: { label: 'Home' },
  },

  {
    path: 'films',
    loadComponent: () => import('./films/films.component'),
    title: 'Films | Angular Demo',
    data: { label: 'Films' },
  },
  {
    path: 'film/:id',
    loadComponent: () => import('./films/film.detail.component'),
    title: 'Film Detail | Angular Demo',
  },
  {
    path: 'series',
    loadComponent: () => import('./series/series.component'),
    title: 'Series | Angular Demo',
    data: { label: 'Series' },
  },
  {
    path: 'user',
    loadComponent: () => import('./user/profile.component'),
    title: 'User profile | Angular Demo',
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component'),
    title: 'About | Angular Demo',
    data: { label: 'About' },
  },
  { path: '**', redirectTo: 'home' },
];
