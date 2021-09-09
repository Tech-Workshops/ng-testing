import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeliveredOrdersComponent } from './delivered-orders.component';

describe('DeliveredComponent', () => {
  let component: DeliveredOrdersComponent;
  let fixture: ComponentFixture<DeliveredOrdersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
