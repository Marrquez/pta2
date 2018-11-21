import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'validateNumber'})
export class ValidateNumberPipe implements PipeTransform {
  transform(value:number): string {
    var result:string = '';
    if((value + 1) % 3 === 0 && (value + 1) % 5 === 0){
      result = "[ " + (value + 1) + " es múltiplo de tres y Cinco ]";
    }else if((value + 1) % 3 === 0){
      result = "[ " + (value + 1) + " es múltiplo de tres ]";
    }else if((value + 1) % 5 === 0){
      result = "[ " + (value + 1) + " es múltiplo de Cinco ]";;
    }else{
      result = (value + 1).toString() ;
    }
    return result;
  }
}
