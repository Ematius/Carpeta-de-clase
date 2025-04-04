import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComponent } from './add.edit.component';
import { ComponentRef } from '@angular/core';

describe('AddEditComponent from series', () => {
  let component: AddEditComponent;
  let componentRef: ComponentRef<AddEditComponent>;
  let fixture: ComponentFixture<AddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('isAdding', true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
