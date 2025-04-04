import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { UserService } from '../../../user/services/user.service';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, HttpClientModule],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Caja blanca -> Implementación
  it('should have title', () => {
    expect(component.title).toBeDefined();
    expect(component.title()).toBe('demo');
  });

  // Caja negra -> Comportamiento
  it('should render title', () => {
    const render = fixture.nativeElement as HTMLElement;
    const h1Element = render.querySelector('h1');
    expect(h1Element?.textContent).toContain('Welcome Demo');

    // const debug = fixture.debugElement;
    // const h1Element = debug.query(By.css('h1')).nativeElement;
    // expect(h1Element?.textContent).toContain('Welcome Demo');
  });
});
