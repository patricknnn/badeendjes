import { Component, Input } from '@angular/core';
import { HouseRulesDialogComponent } from './house-rules-dialog/house-rules-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-house-rules',
  templateUrl: './house-rules.component.html',
  styleUrls: ['./house-rules.component.scss'],
})
export class HouseRulesComponent {
  @Input() color: string = 'primary';
  
  constructor(public readonly _dialog: MatDialog) {}

  public openDialog(): void {
    this._dialog.open(HouseRulesDialogComponent);
  }
}
