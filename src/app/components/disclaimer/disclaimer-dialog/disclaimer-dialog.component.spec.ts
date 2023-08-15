import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerDialogComponent } from './disclaimer-dialog.component';

describe('DisclaimerDialogComponent', () => {
  let component: DisclaimerDialogComponent;
  let fixture: ComponentFixture<DisclaimerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisclaimerDialogComponent]
    });
    fixture = TestBed.createComponent(DisclaimerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
