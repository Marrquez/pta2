import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintNumbersComponent } from './print-numbers.component';

describe('PrintNumbersComponent', () => {
  let component: PrintNumbersComponent;
  let fixture: ComponentFixture<PrintNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
