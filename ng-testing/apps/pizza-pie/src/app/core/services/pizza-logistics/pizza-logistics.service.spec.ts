import { TestBed } from '@angular/core/testing';

import { PizzaLogisticsService } from './pizza-logistics.service';

describe('PizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaLogisticsService = TestBed.get(PizzaLogisticsService);
    expect(service).toBeTruthy();
  });
});
