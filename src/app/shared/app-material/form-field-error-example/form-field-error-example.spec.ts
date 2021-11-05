import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldErrorExampleComponent } from './form-field-error-example';

describe('FormFieldErrorExampleComponent', () => {
  let component: FormFieldErrorExampleComponent;
  let fixture: ComponentFixture<FormFieldErrorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldErrorExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldErrorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
