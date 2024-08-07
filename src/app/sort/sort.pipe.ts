import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: true,
})
export class SortPipe implements PipeTransform {
  transform(value: string[] | null | undefined): string[] {
    if (!value) {
      return [];
    }
    return value.sort();
  }
}
