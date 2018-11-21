import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateModeComponent } from './calculate-mode.component';

describe('CalculateModeComponent', () => {
  let component: CalculateModeComponent;
  let fixture: ComponentFixture<CalculateModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
