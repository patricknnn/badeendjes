import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveDividerComponent } from './wave-divider.component';

describe('WaveDividerComponent', () => {
  let component: WaveDividerComponent;
  let fixture: ComponentFixture<WaveDividerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaveDividerComponent]
    });
    fixture = TestBed.createComponent(WaveDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
