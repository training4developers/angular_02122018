import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {

  public transform(value: string) {
    return value.slice(0, 2).toUpperCase() + value.slice(2);
  }

} 