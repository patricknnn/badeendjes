import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisclaimerDialogComponent } from './disclaimer-dialog/disclaimer-dialog.component';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
})
export class DisclaimerComponent {
  @Input() color: string = 'warn';

  constructor(public readonly _dialog: MatDialog) {}

  public openDialog(): void {
    this._dialog.open(DisclaimerDialogComponent);
  }
}
