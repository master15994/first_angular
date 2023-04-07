import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mult',
})
export default class MyltiPipe implements PipeTransform {
  transform(num: number, pow: number = 2): number {
    return num * pow;
  }
}
