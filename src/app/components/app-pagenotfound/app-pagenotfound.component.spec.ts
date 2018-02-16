import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPagenotfoundComponent } from './app-pagenotfound.component';

describe('AppPagenotfoundComponent', () => {
  let component: AppPagenotfoundComponent;
  let fixture: ComponentFixture<AppPagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPagenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
