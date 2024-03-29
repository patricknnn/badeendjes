import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public phoneNumber?: string;
  public email?: string;
  public address?: string;
  public facebookUrl?: SafeUrl;
  public instagramUrl?: SafeUrl;
  public mapsUrl?: SafeUrl;

  public constructor(
    private readonly _translateService: TranslateService,
    private readonly _sinatizer: DomSanitizer
  ) {}

  public async ngOnInit(): Promise<void> {
    const number: string = await this._translateService.getTranslation(
      'contact.phone.number'
    );
    this.phoneNumber = `31${number.replaceAll(' ', '')}`;
    this.email = await this._translateService.getTranslation(
      'contact.email.address'
    );
    this.address = await this._translateService.getTranslation(
      'contact.location.address'
    );
    this.facebookUrl = this._sinatizer.bypassSecurityTrustUrl(
      await this._translateService.getTranslation('contact.facebook.url')
    );
    this.instagramUrl = this._sinatizer.bypassSecurityTrustUrl(
      await this._translateService.getTranslation('contact.instagram.url')
    );

    this.mapsUrl = this.getEmbeddedMapsUrl(this.address);
  }

  public getLocationHref(): SafeUrl {
    const addressURL = this.address?.replace(' ', '+');

    return this._sinatizer.bypassSecurityTrustUrl(
      `https://www.google.nl/maps?q=${addressURL}`
    );
  }

  private getEmbeddedMapsUrl(address: string): SafeUrl {
    const apiKey: string = '&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8';
    const baseUrl: string = 'https://www.google.com/maps/embed/v1/place?q=';
    const addressURL = address.replace(' ', '+');

    return this._sinatizer.bypassSecurityTrustResourceUrl(
      `${baseUrl}${addressURL}${apiKey}`
    );
  }
}
