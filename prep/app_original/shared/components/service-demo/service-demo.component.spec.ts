import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDemoComponent } from './service-demo.component';

describe('ServiceDemoComponent', () => {
  let component: ServiceDemoComponent;
  let fixture: ComponentFixture<ServiceDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
