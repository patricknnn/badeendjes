import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wave-divider',
  templateUrl: './wave-divider.component.html',
  styleUrls: ['./wave-divider.component.scss'],
})
export class WaveDividerComponent {
  @Input() color: string = '#eff8f7';
  @Input() bgColor: string = '#31a4a7';
}
