import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translateText',
})
export class TranslateTextPipe implements PipeTransform {
  public constructor(private readonly _translateService: TranslateService) {}

  public async transform(value: string): Promise<string> {
    return this._translateService.getTranslation(value);
  }
}
