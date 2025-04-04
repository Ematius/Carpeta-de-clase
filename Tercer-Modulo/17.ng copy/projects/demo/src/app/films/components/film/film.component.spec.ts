import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComponent } from './film.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoService } from '../../services/repo.service';
import { StateService } from '../../services/state.service';
import { RouterModule } from '@angular/router';

xdescribe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmComponent, HttpClientModule, RouterModule],
      providers: [StateService, RepoService],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
