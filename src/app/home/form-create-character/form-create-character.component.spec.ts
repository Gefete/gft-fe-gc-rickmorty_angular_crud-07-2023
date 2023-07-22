import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateCharacterComponent } from './form-create-character.component';

describe('FormCreateCharacterComponent', () => {
  let component: FormCreateCharacterComponent;
  let fixture: ComponentFixture<FormCreateCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateCharacterComponent]
    });
    fixture = TestBed.createComponent(FormCreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
