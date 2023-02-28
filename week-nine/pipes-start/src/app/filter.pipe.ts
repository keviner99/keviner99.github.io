import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filerString: string, propName: string): any {
    if (value.length === 0 || filerString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filerString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
