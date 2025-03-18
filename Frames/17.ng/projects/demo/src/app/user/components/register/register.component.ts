import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DTOUser } from '../../../core/types/user';

@Component({
  selector: 'cas-register',
  imports: [ReactiveFormsModule],
  template: `
  <form [formGroup]="formGroup" (submit)="onSubmit()">
    <label for="name">
      <span>Name></span>
      <input type="text" formControlName="name" />
    </label>
    <label for="email">
      <span>Email></span>
      <input type="email" formControlName="email" />
    </label>
    <label for="handleName">
      <span>Handle Name></span>
      <input type="text" formControlName="handleName" />
    </label>
    <label for="password">
      <span>Password></span>
      <input type="password" formControlName="password" />
    </label>
    <label for="firstName">
      <span>First Name></span>
      <input type="text" formControlName="firstName" />
    </label>
    <label for="lastName">
      <span>Last Name></span>
      <input type="text" formControlName="lastName" />
    </label>
    <button type="submit">Register</button>



  `,
  styles: ``,
})
export class RegisterComponent {

 fb = inject(FormBuilder);

 formGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required, ],
    handleName: ['', Validators.required],
    password: ['', [ ] ],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });





  constructor() {

    console.log(this.formGroup);
  }

onSubmit() {
  console.log(this.formGroup);
}



  }










