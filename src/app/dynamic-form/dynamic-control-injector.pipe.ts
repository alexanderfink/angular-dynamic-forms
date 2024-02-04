import { inject, Injector, Pipe, PipeTransform } from '@angular/core';
import { CONTROL_DATA, DynamicControl } from './dynamic-form.model';

@Pipe({
  name: 'dynamicControlInjector',
  standalone: true
})
export class DynamicControlInjectorPipe implements PipeTransform {

  injector = inject(Injector);

  transform(controlKey: string, config: DynamicControl): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: CONTROL_DATA,
          useValue: { controlKey, config }
        }
      ]
    });
  }

}
