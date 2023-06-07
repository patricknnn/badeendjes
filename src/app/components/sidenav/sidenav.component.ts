import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export interface navLink {
  title: string;
  href: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements AfterViewInit {
  @Input() open: boolean = false;
  @Output() linkClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public scrollElement: HTMLElement | null = null;

  public navlinks: navLink[] = [
    { title: 'home.title', href: '#header' },
    { title: 'welcome.title', href: '#welcome' },
    { title: 'team.title', href: '#team' },
    { title: 'about.title', href: '#about' },
    { title: 'contact.title', href: '#contact' },
  ];

  public ngAfterViewInit(): void {
    this.scrollElement = document.getElementById('scroll-content');
  }

  public isNavlinkActive(id: string): boolean {
    if (this.scrollElement) {
      const element = document.getElementById(id.substring(1));

      if (element) {
        const rect: DOMRect = element.getBoundingClientRect();

        return (
          this.scrollElement.offsetHeight + rect.height > rect.bottom &&
          this.scrollElement.offsetHeight < rect.bottom
        );
      }

      return false;
    }

    return false;
  }
}
