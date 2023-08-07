import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public viewPortHeight!: string;

  public constructor() {
    this.setViewPortHeight();
  }

  @HostListener('window:resize', ['$event'])
  private setViewPortHeight(): void {
    this.viewPortHeight = `${window.innerHeight}px`;
  }
}
