import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsFormComponent } from './signups-form.component';

describe('SignupsFormComponent', () => {
  let component: SignupsFormComponent;
  let fixture: ComponentFixture<SignupsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
