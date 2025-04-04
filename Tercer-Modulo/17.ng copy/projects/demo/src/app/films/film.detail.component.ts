import { Component, inject, input, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { StateService } from './services/state.service';
import { Film } from '../core/types/film';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'cas-film.detail',
  imports: [AsyncPipe],
  template: `
    @let film = (film$ | async)![0];

    <h2>{{ film?.title }}</h2>

    <p>{{ film?.description }}</p>
    <p>{{ film?.releaseYear }}</p>
    <p>{{ film?.duration }}</p>
    <p>{{ film?.director }}</p>
    <p>{{ film?.rating }}</p>
    <a [href]="film?.poster" target="">Link</a>
  `,
  styles: ``,
})
export default class FilmDetailComponent implements OnInit {
  //activeRoute = inject(ActivatedRoute);
  // @Input() id!: string;
  id = input('id');
  stateService = inject(StateService);
  film$: Observable<Film[]> = of([]);

  //constructor() {
  // console.log('Constructor FilmDetailComponent');
  // this.activeRoute.params.subscribe((params) => {
  //   this.id = params['id'];
  //   console.log(this.id);
  //   // Subscribing to the service (bad practice)
  //   // this.stateService.getFilm(this.id).subscribe((film) => {
  //   //   this.film = film[0];
  //   // });
  //   this.film$ = this.stateService.getFilm(this.id);
  // });
  // this.id = this.activeRoute.snapshot.params['id'];
  //}

  ngOnInit(): void {
    this.film$ = this.stateService.getFilm(this.id());
  }
}
