import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieComponent } from '../serie/serie.component';

describe('SerieComponent', () => {
  let component: SerieComponent;
  let fixture: ComponentFixture<SerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
