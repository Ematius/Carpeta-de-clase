import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComponent } from './add.edit.component';
import { StateService } from '../../services/state.service';
import { RepoService } from '../../services/repo.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentRef } from '@angular/core';

describe('AddEditComponent', () => {
  let component: AddEditComponent;
  let componentRef: ComponentRef<AddEditComponent>;
  let fixture: ComponentFixture<AddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditComponent, HttpClientModule],
      providers: [StateService, RepoService],
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
