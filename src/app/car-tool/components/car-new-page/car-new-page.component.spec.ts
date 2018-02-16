import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarNewPageComponent } from './car-new-page.component';

describe('CarNewPageComponent', () => {
  let component: CarNewPageComponent;
  let fixture: ComponentFixture<CarNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
