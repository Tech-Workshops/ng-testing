import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaOrder } from '../../shared/models/pizza-order.model';
import { PizzaTopping } from '../../shared/models/pizza.topping';

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.scss']
})
export class OpenOrdersComponent {
  @Input() orders$: Observable<PizzaOrder[]>;
  @Input() toppings$: Observable<PizzaTopping[]>;
}
