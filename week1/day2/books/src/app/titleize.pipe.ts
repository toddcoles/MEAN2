import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'titleize'
})
@Injectable()
export class TitleizePipe implements PipeTransform {
  public static skipWords: string[] = ['of', 'the', 'a', 'in', 'an'];

  transform(value: string, args?: boolean | string[]): string {
    if (typeof value !== 'string') {
      return value;
    }
    const skipWords: string[] = Array.isArray(args)
      ? args
      : TitleizePipe.skipWords;

    const processSkipwords: boolean = args !== false;

    return value.replace(/\w[^-\s]*/g, (word, index: number) => {
      return index && processSkipwords && skipWords.includes(word.toLowerCase())
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.substr(1).toLowerCase();
    });
  }
}
