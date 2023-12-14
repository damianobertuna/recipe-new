import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value, ...args: unknown[]): unknown {
    return value.sort(
      (a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
    );
  }

}
