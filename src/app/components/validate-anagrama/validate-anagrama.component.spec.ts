import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateAnagramaComponent } from './validate-anagrama.component';

describe('ValidateAnagramaComponent', () => {
  let component: ValidateAnagramaComponent;
  let fixture: ComponentFixture<ValidateAnagramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateAnagramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateAnagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
