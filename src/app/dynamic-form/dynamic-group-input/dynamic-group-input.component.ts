import { Component, HostBinding, inject } from '@angular/core';
import { DynamicBaseInput, dynamicControlProvider } from '../dynamic-base-input/dynamic-base-input.directive';
import { NgComponentOutlet, NgIf } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicControlInjectorPipe } from '../dynamic-control-injector.pipe';
import { DynamicFormRendererComponent } from '../dynamic-form-renderer/dynamic-form-renderer.component';

@Component({
  selector: 'app-dynamic-group-input',
  templateUrl: './dynamic-group-input.component.html',
  imports: [
    NgComponentOutlet,
    ReactiveFormsModule,
    DynamicControlInjectorPipe,
    DynamicFormRendererComponent,
    NgIf
  ],
  standalone: true,
  viewProviders: [
    dynamicControlProvider
  ]
})
export class DynamicGroupInputComponent extends DynamicBaseInput {
  @HostBinding('class') override defaultInputClass = 'dynamicFormGroup'

  protected override formControl: FormGroup = new FormGroup(
    {},
    this.controlData.config.validators,
    this.controlData.config.asyncValidators
  );
}
