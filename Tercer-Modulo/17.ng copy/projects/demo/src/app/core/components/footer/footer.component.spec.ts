import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    component.today = new Date('1789-10-01T12:00:00Z'); // Set a fixed date for testing
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct date', () => {
    const compiled = fixture.nativeElement;
    const dateElement = compiled.querySelector('p:nth-child(1)');
    expect(dateElement.textContent).toContain('1789');
  });
});
