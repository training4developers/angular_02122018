import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAppend'
})
export class MyAppendPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return String(value) + args.join('');
  }

}
