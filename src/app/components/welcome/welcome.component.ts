import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  public houseRules: string =
    './assets/files/Huisregels Kinderopvang De Badeendjes.pdf';
}
