import { Injectable, Type } from '@angular/core';
import { from, of, tap } from 'rxjs';
import { DynamicBaseInput } from './dynamic-base-input/dynamic-base-input.directive';

@Injectable({
  providedIn: 'root'
})
export class DynamicInputResolver {
  private dynamicInputs = new Map<string, () => Promise<Type<DynamicBaseInput>>>([
    ['group', () => import('./dynamic-group-input/dynamic-group-input.component').then((c) => c.DynamicGroupInputComponent)],
  ])

  private loadedControlComponents = new Map<string, Type<any>>();

  resolve(controlType: string) {
    const loadedComponent = this.loadedControlComponents.get(controlType);
    if (loadedComponent) {
      return of(loadedComponent);
    }

    const componentResolverFunction = this.dynamicInputs.get(controlType);
    if(componentResolverFunction) {
      return from(componentResolverFunction()).pipe(
        tap(comp => this.loadedControlComponents.set(controlType, comp))
      );
    } else {
      throw new Error(`Could not find dynamic input with key "${controlType}"`);
    }
  }

  registerControl(key: string, componentLoader: () => Promise<Type<DynamicBaseInput>>): boolean {
    if(this.dynamicInputs.has(key)) {
      return false;
    }

    this.dynamicInputs.set(key, componentLoader);
    return true;
  }
}
