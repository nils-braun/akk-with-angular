import {ControlValueAccessor} from '@angular/forms';
import {Input} from '@angular/core';

export class ValueAccessor<T> implements ControlValueAccessor {
  @Input() _value: T;

  private changed : Array<(value: T) => void> = [];
  private touched : Array<() => void> = [];

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    if (this._value !== value) {
      this._value = value;
      this.changed.forEach(f => f(value));
    }
  }

  touch() {
    this.touched.forEach(f => f());
  }

  writeValue(value: T) {
    this._value = value;
  }

  registerOnChange(fn: (value: T) => void) {
    this.changed.push(fn);
  }

  registerOnTouched(fn: () => void) {
    this.touched.push(fn);
  }

}
