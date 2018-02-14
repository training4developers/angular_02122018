import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myEllipsis'
})
export class MyEllipsisPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value == null || String(value).length === 0) {
      return '';
    }

    const sValue = String(value);
    const maxLength = Number(args);

    if (isNaN(maxLength)) {
      return sValue;
    }

    if (sValue.length > maxLength) {
      return sValue.slice(0, maxLength) + '...';
    }

    return sValue;
  }

}
