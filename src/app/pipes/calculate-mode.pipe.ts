import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'calculateMode', pure:false})
export class CalculateModePipe implements PipeTransform {
  transform(value:Array<number>): number {
    var result:number = value.reduce(function(current, item) {
      var val = current.numMapping[item] = (current.numMapping[item] || 0) + 1;
      if (val > current.greatestFreq) {
        current.greatestFreq = val;
        current.mode = item;
      }
      return current;
    }, {mode: null, greatestFreq: -Infinity, numMapping: {}}).mode;

    return result;
  }
}
