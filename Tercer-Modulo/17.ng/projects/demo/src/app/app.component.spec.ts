import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { UserService } from './user/services/user.service';

describe('AppComponent', () => {

  let component: AppComponent;//test caja blanca lo que ve el programador
  let fixture: ComponentFixture<AppComponent>; //test caja negra lo que ve mi abuela

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [UserService],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'demo' title`, () => {
    expect(component.routes).toEqual([]);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, demo');
  });
});
