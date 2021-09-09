import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PizzaLogisticsService } from '../../core/services/pizza-logistics/pizza-logistics.service';
import { PizzaOrder } from '../../shared/models/pizza-order.model';
import { PizzaTopping } from '../../shared/models/pizza.topping';

@Component({
  selector: 'app-open-orders-item',
  templateUrl: './open-orders-item.component.html',
  styleUrls: ['./open-orders-item.component.scss']
})
export class OpenOrdersItemComponent {
  @Input() order: PizzaOrder;
  @Input() toppings: PizzaTopping[];

  private subscriptions = new Subscription();

  constructor(private pizzaLogisticsService: PizzaLogisticsService) { }

  public sendToKitchen(): void {
    this.pizzaLogisticsService.sendToKitchen(this.order);
  }

  public getToppings(): string {
    let toppings = '';

    if (!this.order.toppings
        || this.order.toppings.length === 0
        || !this.toppings
        || this.toppings.length === 0) {
      return '';
    }

    this.order.toppings.forEach(x => {
      toppings = `${toppings} ${this.getToppingName(x)},`;
    });

    return toppings.length > 0
      ? toppings.substring(0, toppings.length - 1)
      : '';
  }

  private getToppingName(id: number): string {
    const topping = this.toppings.find(x => x.id === id);
    return topping !== undefined
      ? topping.name
      : '';
  }
}

