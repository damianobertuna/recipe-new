import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value, keyName: string): unknown {
    return value.sort(
      (a,b) => (a[keyName] > b[keyName]) ? 1 : ((b[keyName] > a[keyName]) ? -1 : 0)
    );
  }

}
