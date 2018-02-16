import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorHomeComponent } from './color-home.component';

describe('ColorHomeComponent', () => {
  let component: ColorHomeComponent;
  let fixture: ComponentFixture<ColorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
