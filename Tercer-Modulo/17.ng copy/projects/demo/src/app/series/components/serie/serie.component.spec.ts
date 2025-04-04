import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieComponent } from '../serie/serie.component';
import { ComponentRef } from '@angular/core';

describe('SerieComponent', () => {
  let component: SerieComponent;
  let componentRef: ComponentRef<SerieComponent>;
  let fixture: ComponentFixture<SerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SerieComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('serie', {
      id: '1',
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
