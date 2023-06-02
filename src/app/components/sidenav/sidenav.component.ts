import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface navLink {
  title: string;
  href: string;
  icon: string;
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
    { title: 'Home', href: '#header', icon: 'house' },
    { title: 'Welkom', href: '#welcome', icon: 'house' },
    { title: 'Over ons', href: '#about', icon: 'house' },
    { title: 'Contact', href: '#contact', icon: 'house' },
  ];
  public activeNavlink: navLink = this.navlinks[0];
}
