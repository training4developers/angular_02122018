import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarRowComponent } from './edit-car-row.component';

describe('EditCarRowComponent', () => {
  let component: EditCarRowComponent;
  let fixture: ComponentFixture<EditCarRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCarRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
