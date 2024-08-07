import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: string[] | null | undefined, sep = ', '): string {
    if (!value) {
      return '';
    }
    const _value = [...value];
    return _value.sort().join(sep);
  }
}
