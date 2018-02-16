import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSupportFormComponent } from './product-support-form.component';

describe('ProductSupportFormComponent', () => {
  let component: ProductSupportFormComponent;
  let fixture: ComponentFixture<ProductSupportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSupportFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSupportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
