import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMark',
})
export class ExMarkPipe implements PipeTransform {
  transform(srt: string): string {
    return ` ${srt.trim()} !!!! add new pipe`;
  }
}
