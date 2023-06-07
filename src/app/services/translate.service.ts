import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  public areTranslationsResolved: boolean = false;
  private translateCache: Promise<string> | undefined = undefined;

  public constructor(private readonly _http: HttpClient) {}

  public async getTranslation(value: string): Promise<string> {
    const json: string = await this.getTranslations();
    this.areTranslationsResolved = true;

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
    const localTranslations: string = '/assets/translations.json';

    if (!this.translateCache) {
      this.translateCache = lastValueFrom(
        this._http.get<string>(localTranslations)
      );
    }

    return this.translateCache;
  }
}
