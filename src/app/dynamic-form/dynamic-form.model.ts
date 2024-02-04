import { InjectionToken } from '@angular/core';
import { KeyValue } from '@angular/common';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export interface DynamicControl<T = 'string'> {
  controlType: 'input' | 'select' | 'group';
  type?: string;
  value: string | number | T | null;
  label: string;
  order: number;
  placeholder?: string;
  controls?: {
    [key: string]: DynamicControl;
  },
  options?: DynamicOptions[],
  validators?: ValidatorFn[],
  asyncValidators?: AsyncValidatorFn[]
}

export interface DynamicOptions {
  label: string;
  value: string;
}

export interface DynamicFormConfiguration {
  description: string;
  controls: {
    [key: string]: DynamicControl;
  };
}

export type DynamicControlType = {[p: string]: DynamicControl};

export interface ControlData {
  controlKey: string;
  config: DynamicControl;
}

export function sortControls(a: KeyValue<string, DynamicControl>, b: KeyValue<string, DynamicControl>): number {
  return a.value.order - b.value.order;
}

export const CONTROL_DATA = new InjectionToken<ControlData>('Control Data');
