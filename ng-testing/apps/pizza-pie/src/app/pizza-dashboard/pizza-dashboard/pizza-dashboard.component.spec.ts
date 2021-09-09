import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PizzaDashboardComponent } from './pizza-dashboard.component';

describe('PizzaDashboardComponent', () => {
  let component: PizzaDashboardComponent;
  let fixture: ComponentFixture<PizzaDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
