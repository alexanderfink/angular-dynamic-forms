import { Directive, HostBinding, inject, OnDestroy, OnInit, StaticProvider } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { CONTROL_DATA } from '../dynamic-form.model';

export const dynamicControlProvider: StaticProvider = {
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, {skipSelf: true})
}

@Directive({
  selector: '[appDynamicBaseInput]',
  standalone: true
})
export class DynamicBaseInput implements OnInit, OnDestroy {
  controlData = inject(CONTROL_DATA);
  parentFormGroup = inject(ControlContainer)

  protected formControl: AbstractControl = new FormControl(
    this.controlData.config.value,
    this.controlData.config.validators,
    this.controlData.config.asyncValidators
  );

  @HostBinding('class') defaultInputClass = 'dynamicFormControl'

  ngOnInit(): void {
    (this.parentFormGroup.control as FormGroup).addControl(this.controlData.controlKey, this.formControl);
    this.formControl.addValidators(Validators.required);
  }

  ngOnDestroy(): void {
    (this.parentFormGroup.control as FormGroup).removeControl(this.controlData.controlKey);
  }
}
