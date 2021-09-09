import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReadyForDeliveryItemComponent } from './ready-for-delivery-item.component';

describe('ReadyForDeliveryItemComponent', () => {
  let component: ReadyForDeliveryItemComponent;
  let fixture: ComponentFixture<ReadyForDeliveryItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyForDeliveryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyForDeliveryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
