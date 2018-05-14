import { Directive, HostListener, HostBinding, Input, Attribute } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective {
  constructor(public control: NgModel) {
  }
  
  @HostListener('input', ['$event'])
  input(event) {
    const input = event.target;
    const newValue = input.value;
    if (/^\d+\.?\d{0,2}$/.test(input.value)) {
      console.log('new');
      input.value = newValue;
      this.control.viewToModelUpdate(newValue);
    } else {
      console.log('new ----');
      input.value = newValue.substring(0, newValue.length - 1);
      this.control.viewToModelUpdate(newValue.substring(0, newValue.length - 1));
    }
    // https://github.com/kittencup/angular2-ama-cn/issues/215
  }
}
