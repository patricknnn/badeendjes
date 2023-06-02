import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss'],
})
export class CallComponent implements OnInit {
  public phoneNumber?: string;

  public constructor(private readonly _translateService: TranslateService) {}

  public async ngOnInit(): Promise<void> {
    this.phoneNumber = await this._translateService.getTranslation(
      'contact.phone.number'
    );
  }
}
