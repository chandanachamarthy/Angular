import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'rangefilter'
})

export class RangefilterPipe implements PipeTransform {
  transform(products: any, min: any, max: any): any {
    return products.filter(
      (x: any) =>x.price>= min && x.price<= max)
  }

}