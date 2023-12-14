import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): unknown {
    let reverseString = '';

    for (let i=0; i<value.length; i++) {
      reverseString = value[i] + reverseString;
    }

    return reverseString;
  }

}
