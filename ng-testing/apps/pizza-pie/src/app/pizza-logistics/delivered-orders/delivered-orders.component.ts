import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Driver } from '../../shared/models/driver.model';
import { PizzaOrder } from '../../shared/models/pizza-order.model';

@Component({
  selector: 'app-delivered-orders',
  templateUrl: './delivered-orders.component.html',
  styleUrls: ['./delivered-orders.component.scss']
})
export class DeliveredOrdersComponent {
  @Input() orders$: Observable<PizzaOrder[]>;

  private subscriptions = new Subscription();
}
