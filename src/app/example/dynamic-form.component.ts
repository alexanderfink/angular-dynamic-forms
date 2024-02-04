import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicFormRendererComponent } from '../dynamic-form/dynamic-form-renderer/dynamic-form-renderer.component';
import { DynamicInputResolver } from '../dynamic-form/dynamic-input-resolver.service';
import { CommonModule } from '@angular/common';
import { DynamicFormConfiguration } from '../dynamic-form/dynamic-form.model';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  templateUrl: './dynamic-form.component.html',
  imports: [ReactiveFormsModule, DynamicFormRendererComponent, CommonModule]
})
export class DynamicFormComponent implements OnInit {
  formGroup = new FormGroup({});

  dynamicInputResolver = inject(DynamicInputResolver);
  private readonly changeRef = inject(ChangeDetectorRef);

  configForTest!: DynamicFormConfiguration;

  constructor() {
    this.dynamicInputResolver.registerControl('input', () => import('./input-controls/dynamic-text-input/dynamic-text-input.component').then(c => c.DynamicTextInputComponent))
    this.dynamicInputResolver.registerControl('select', () => import('./input-controls/dynamic-select-input/dynamic-select-input.component').then(c => c.DynamicSelectInputComponent));
  }

  ngOnInit(): void {
    this.changeRef.detectChanges();
  }

  onSubmit(): void {
    console.log('FORM', this.formGroup.value);
    this.formGroup.reset();
  }

  addControl(): void {
    this.configForTest = {
      description: 'This is just a dynamic form for test',
      controls: {
        firstName: {
          type: 'text',
          controlType: 'input',
          value: '',
          label: 'Firstname',
          placeholder: 'Alexander',
          order: 0,
        },
        age: {
          type: 'number',
          controlType: 'input',
          value: '',
          label: 'Age',
          placeholder: '18',
          order: 1
        },
        address: {
          type: 'group',
          label: 'Address',
          controlType: 'group',
          value: null,
          order: 2,
          controls: {
            street: {
              type: 'text',
              controlType: 'input',
              value: '',
              label: 'Straße',
              placeholder: 'Alexander',
              order: 1
            },
            houseNumber: {
              type: 'number',
              controlType: 'input',
              value: '',
              label: 'Hausnummer',
              placeholder: '14',
              order: 2
            },
          }
        }
      }
    };
    this.changeRef.markForCheck();
  }
}
