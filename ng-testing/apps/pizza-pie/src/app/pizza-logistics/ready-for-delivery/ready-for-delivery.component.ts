import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Driver } from '../../shared/models/driver.model';
import { PizzaOrder } from '../../shared/models/pizza-order.model';

@Component({
  selector: 'app-ready-for-delivery',
  templateUrl: './ready-for-delivery.component.html',
  styleUrls: ['./ready-for-delivery.component.scss']
})
export class ReadyForDeliveryComponent {
  @Input() orders$: Observable<PizzaOrder[]>;
  @Input() availableDrivers$: Observable<Driver[]>;

  constructor() {
  }
}
