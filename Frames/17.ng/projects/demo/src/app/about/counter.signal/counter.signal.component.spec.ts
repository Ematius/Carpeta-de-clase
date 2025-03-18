import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSignalComponent } from './counter.signal.component';

describe('CounterComponent', () => {
  let component: CounterSignalComponent;
  let fixture: ComponentFixture<CounterSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
