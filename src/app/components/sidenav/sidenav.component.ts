import {
  AfterViewInit,
  ChangeDetectorRef,
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

  public navlinks: navLink[] = [
    { title: 'home.title', href: '#header' },
    { title: 'welcome.title', href: '#welcome' },
    { title: 'team.title', href: '#team' },
    { title: 'about.title', href: '#about' },
    { title: 'contact.title', href: '#contact' },
  ];
  
  public constructor(private readonly _changeDetector: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this._changeDetector.detectChanges();
  }

  public isNavlinkActive(id: string): boolean {
    const scrollElement = document.getElementById('scroll-content');
    const element = document.getElementById(id.substring(1));

    if (scrollElement && element) {
      const rect: DOMRect = element.getBoundingClientRect();

      return (
        scrollElement.offsetHeight + rect.height > rect.bottom &&
        scrollElement.offsetHeight < rect.bottom
      );
    }

    return false;
  }
}
