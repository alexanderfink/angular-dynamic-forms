import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import {
  DynamicBaseInput,
  dynamicControlProvider
} from '../../../dynamic-form/dynamic-base-input/dynamic-base-input.directive';


@Component({
  selector: 'app-dynamic-text-input',
  templateUrl: './dynamic-text-input.component.html',
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  standalone: true,
  viewProviders: [
    dynamicControlProvider
  ]
})
export class DynamicTextInputComponent extends DynamicBaseInput {
}
