import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Pipe({
  name: 'translateText',
})
export class TranslateTextPipe implements PipeTransform {
  private translateCache: Promise<string> | undefined = undefined;

  public constructor(private readonly _http: HttpClient) {}

  public async transform(value: string): Promise<string> {
    const json: string = await this.getTranslations();

    return this.getTranslatedText(value, json);
  }

  private getTranslatedText(key: string, translations: string): any {
    return key
      .split('.')
      .reduce(
        (previousValue: any, currentValue: string) =>
          previousValue?.[currentValue],
        translations
      );
  }

  private getTranslations(): Promise<string> {
    if (!this.translateCache) {
      this.translateCache = lastValueFrom(
        this._http.get<string>('/assets/translations.json')
      );
    }

    return this.translateCache;
  }
}
