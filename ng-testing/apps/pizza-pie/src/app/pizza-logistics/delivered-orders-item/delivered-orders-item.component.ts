import { Component, Input, OnInit } from '@angular/core';
import { PizzaLogisticsService } from '../../core/services/pizza-logistics/pizza-logistics.service';
import { Driver } from '../../shared/models/driver.model';
import { PizzaOrder } from '../../shared/models/pizza-order.model';
import { PizzaTopping } from '../../shared/models/pizza.topping';

@Component({
  selector: 'app-delivered-orders-item',
  templateUrl: './delivered-orders-item.component.html',
  styleUrls: ['./delivered-orders-item.component.scss']
})
export class DeliveredOrdersItemComponent implements OnInit {
  @Input() order: PizzaOrder;

  constructor(private pizzaLogisticsService: PizzaLogisticsService) { }

  public ngOnInit(): void {
  }

  public get toppings(): string {
    if (this.order.toppings.length === 0) {
      return '';
    }

    let toppings = '';

    this.order.toppings.forEach(x => {
      toppings = `${toppings} ${this.pizzaLogisticsService.getToppingById(x).name},`;
    });

    return toppings.substring(0, toppings.length - 1);
  }

  public get driver(): string {
    const driver = this.pizzaLogisticsService.getDriverById(this.order.driverId);
    return `${driver.firstName} ${driver.lastName}`;
  }
}
