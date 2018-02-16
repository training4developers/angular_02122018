import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCapitalize'
})
export class MyCapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const sValue = String(value);
    return sValue.slice(0, 1).toUpperCase() + sValue.slice(1);
  }

}
