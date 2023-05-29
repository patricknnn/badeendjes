import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {
  @Input() public active: boolean = false;

  public get btnClass(): string {
    return this.active ? 'active': 'not-active';
  }
}
