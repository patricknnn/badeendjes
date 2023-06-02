import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface navLink {
  title: string;
  href: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() open: boolean = false;
  @Output() linkClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public navlinks: navLink[] = [
    { title: 'home.title', href: '#header' },
    { title: 'welcome.title', href: '#welcome' },
    { title: 'about.title', href: '#about' },
    { title: 'contact.title', href: '#contact' },
  ];
  public activeNavlink: navLink = this.navlinks[0];
}
