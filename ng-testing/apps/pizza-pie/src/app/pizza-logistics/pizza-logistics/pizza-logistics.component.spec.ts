import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PizzaLogisticsComponent } from './pizza-logistics.component';

describe('PizzaLogisticsComponent', () => {
  let component: PizzaLogisticsComponent;
  let fixture: ComponentFixture<PizzaLogisticsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
