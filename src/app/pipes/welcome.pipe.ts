import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome',
  pure: false // true
})
export class WelcomePipe implements PipeTransform {

  /*transform(value: any, args?: any): any {
   return null;
   }*/

  transform(value: string): string {
    if (!value) {
      return value;
    }
    if (typeof value !== 'string') {
      throw new Error('Invalid pipe argument for WelcomePipe');
    }
    return 'Welcome to ' + value;
  }
}
