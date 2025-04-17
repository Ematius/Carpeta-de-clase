import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  Signal,
} from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { UserService } from '../../../user/services/user.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'cas-header',
  imports: [LogoComponent, TitleCasePipe],
  template: `
    <header>
      <!-- <img src="/logo.svg" alt="logo" /> -->
      <cas-logo></cas-logo>
      <h1>Welcome {{ title() | titlecase }}!</h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: `
    :host {
      display: block;
      text-align: center;
    }
  `,
})
export class HeaderComponent implements OnInit, OnDestroy {
  userService = inject(UserService);
  title: Signal<string>;
  constructor() {
    this.title = computed(
      () => this.userService.currentUser()?.email.split('@')[0] || 'demo',
    );

    console.log('Constructor HeaderComponent');
    console.log(this.title);
  }

  ngOnInit() {
    console.log('On Init HeaderComponent');
  }

  ngOnDestroy() {
    console.log('On Destroy HeaderComponent');
  }
}
