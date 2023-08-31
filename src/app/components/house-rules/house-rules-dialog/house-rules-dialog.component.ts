import { Component } from '@angular/core';

@Component({
  selector: 'app-house-rules-dialog',
  templateUrl: './house-rules-dialog.component.html',
  styleUrls: ['./house-rules-dialog.component.scss'],
})
export class HouseRulesDialogComponent {
  public isLoading: boolean = true;
  public houseRules: string =
    './assets/files/Huisregels Kinderopvang De Badeendjes.pdf';
}
