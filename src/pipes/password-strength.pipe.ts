import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordStrength'
})
export class PasswordStrengthPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!!value) {
      if (value.length <= 3) {
        return "Password débil";
      } else if (value.length <= 6) {
        return "Password medio";
      } else {
        return "Password fuerte"
      }
    } else {
      return value;
    }
  }

}
