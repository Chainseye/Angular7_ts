import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'math',
  pure: true
})
export class MathPipe implements PipeTransform {

  transform(value: number, equation: string): number {
    switch (equation) {
      case 'ceil':
        return Math.ceil(value);
      default:
        return null;
    }
  }
}
