import {
  AfterViewInit,
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appInView]',
})
export class InViewDirective implements OnInit, AfterViewInit {
  private alreadyRendered: boolean = false;

  public constructor(
    private vcRef: ViewContainerRef,
    private tplRef: TemplateRef<any>
  ) {}

  public ngOnInit(): void {
    this.renderInitialContent();
  }

  public ngAfterViewInit(): void {
    const elToObserve = this.vcRef.element.nativeElement.parentElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.renderContents(entry.isIntersecting);
        });
      },
      { threshold: [0, 0.1, 0.9, 1] }
    );
    observer.observe(elToObserve);
  }

  public renderContents(isInView: boolean): void {
    if (isInView && !this.alreadyRendered) {
      this.tplRef.elementRef.nativeElement.parentElement.style.opacity = 1;

      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.tplRef);
      this.alreadyRendered = true;
    }
  }

  private renderInitialContent(): void {
    // render initial content with opacity 0 in order to prevent href issues
    this.tplRef.elementRef.nativeElement.parentElement.style.opacity = 0;

    this.vcRef.clear();
    this.vcRef.createEmbeddedView(this.tplRef);
  }
}
