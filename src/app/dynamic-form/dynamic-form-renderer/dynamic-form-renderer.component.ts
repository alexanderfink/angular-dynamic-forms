import { Component, inject, Input } from '@angular/core';
import { DynamicInputResolver } from '../dynamic-input-resolver.service';
import { DynamicControlInjectorPipe } from '../dynamic-control-injector.pipe';
import { AsyncPipe, KeyValuePipe, NgComponentOutlet, NgForOf } from '@angular/common';
import { DynamicControlType, sortControls } from '../dynamic-form.model';

@Component({
  selector: 'app-dynamic-form-renderer',
  templateUrl: './dynamic-form-renderer.component.html',
  standalone: true,
  imports: [
    DynamicControlInjectorPipe,
    NgForOf,
    KeyValuePipe,
    AsyncPipe,
    NgComponentOutlet
  ]
})
export class DynamicFormRendererComponent {
  @Input() formControls!: DynamicControlType;

  dynamicInputResolver = inject(DynamicInputResolver);

  protected readonly sortControls = sortControls;
}
