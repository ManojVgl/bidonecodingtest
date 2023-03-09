import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.profileForm.controls.lastName.setValue('');
    component.profileForm.controls.firstName.setValue('');
    expect(component.profileForm.valid).toBeFalsy();
  });

  it('First name  field validity', () => {
    const name = component.profileForm.controls.firstName;
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });

  it('Last name  field validity', () => {
    const name = component.profileForm.controls.firstName;
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });

  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.profileForm).toHaveBeenCalledTimes(1);
  });

  it('form invalid when empty', () => {
    component.profileForm.controls.lastName.setValue('Diyana');
    component.profileForm.controls.firstName.setValue('Manoj');
    expect(component.profileForm.valid).toBeTruthy();
  });

});
