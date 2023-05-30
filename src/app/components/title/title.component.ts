import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() title: string = '';
  @Input() icon: string = 'spa';
  @Input() titleColor: string = 'warn';
  @Input() iconColor: string = 'primary';
}
