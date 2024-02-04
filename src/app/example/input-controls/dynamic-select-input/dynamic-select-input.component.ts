import { Component } from '@angular/core';
import { JsonPipe, NgForOf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  DynamicBaseInput,
  dynamicControlProvider
} from '../../../dynamic-form/dynamic-base-input/dynamic-base-input.directive';

@Component({
  selector: 'app-dynamic-select-input',
  templateUrl: './dynamic-select-input.component.html',
  styleUrls: ['./dynamic-select-input.component.scss'],
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    NgForOf
  ],
  viewProviders: [
    dynamicControlProvider
  ],
  standalone: true
})
export class DynamicSelectInputComponent extends DynamicBaseInput {
}
