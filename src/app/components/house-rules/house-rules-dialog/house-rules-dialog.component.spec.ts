import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRulesDialogComponent } from './house-rules-dialog.component';

describe('HouseRulesDialogComponent', () => {
  let component: HouseRulesDialogComponent;
  let fixture: ComponentFixture<HouseRulesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseRulesDialogComponent]
    });
    fixture = TestBed.createComponent(HouseRulesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
