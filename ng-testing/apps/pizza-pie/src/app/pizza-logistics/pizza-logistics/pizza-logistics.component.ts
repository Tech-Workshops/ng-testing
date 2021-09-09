import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { PizzaLogisticsService } from '../../core/services/pizza-logistics/pizza-logistics.service';
import { DriverState } from '../../shared/enums/driver-state.enum';
import { PizzaState } from '../../shared/enums/pizza-state.enum';
import { Driver } from '../../shared/models/driver.model';
import { PizzaOrder } from '../../shared/models/pizza-order.model';
import { PizzaTopping } from '../../shared/models/pizza.topping';

@Component({
  selector: 'app-pizza-logistics',
  templateUrl: './pizza-logistics.component.html',
  styleUrls: ['./pizza-logistics.component.scss']
})
export class PizzaLogisticsComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  private openPizzaOrders$ = new BehaviorSubject<PizzaOrder[]>([]);
  private readyPizzaOrders$ = new BehaviorSubject<PizzaOrder[]>([]);
  private deliveredPizzaOrders$ = new BehaviorSubject<PizzaOrder[]>([]);
  private pizzaToppings$ = new BehaviorSubject<PizzaTopping[]>([]);
  private availablePizzaDrivers$ = new BehaviorSubject<Driver[]>([]);
  private allDrivers$ = new BehaviorSubject<Driver[]>([]);

  constructor(private pizzaLogisticsService: PizzaLogisticsService) { }

  public ngOnInit(): void {
    this.subscribeOrders();
    this.subscribeToppings();
    this.subscribeDrivers();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public get openOrders$(): BehaviorSubject<PizzaOrder[]> {
    return this.openPizzaOrders$;
  }

  public get readyForDeliveryOrders$(): BehaviorSubject<PizzaOrder[]> {
    return this.readyPizzaOrders$;
  }

  public get deliveredOrders$(): BehaviorSubject<PizzaOrder[]> {
    return this.deliveredPizzaOrders$;
  }

  public get availableDrivers$(): BehaviorSubject<Driver[]> {
    return this.availablePizzaDrivers$;
  }

  public get availableToppings$(): BehaviorSubject<PizzaTopping[]> {
    return this.pizzaToppings$;
  }

  public get drivers$(): BehaviorSubject<Driver[]> {
    return this.allDrivers$;
  }

  ////////////////////////////////////
  // Demo code
  ////////////////////////////////////
  public loadOrders(): void {
    const pizzaOrders = [{
        customerName: 'a',
        toppings: [1, 2, 3],
        size: 2
      }, {
        customerName: 'a',
        toppings: [1, 2, 3],
        size: 2
      }, {
        customerName: 'b',
        toppings: [],
        size: 2
      }, {
        customerName: 'c',
        toppings: [2, 4, 5],
        size: 2
      }, {
        customerName: 'd',
        toppings: [1, 2, 3],
        size: 2
      }, {
        customerName: 'e',
        toppings: [1, 2, 3, 4, 5],
        size: 2
      },{
        customerName: 'f',
        toppings: [ 1, 2, 3],
        size: 2
      }];

    pizzaOrders.forEach(x => {
      this.pizzaLogisticsService.createNewOrder(x as PizzaOrder);
    });
  }

  private subscribeOrders(): void {
    this.subscriptions.add(this.pizzaLogisticsService.getOrders().subscribe(
      data => {
        if (data) {
          const openPizzaOrders = data.filter(x => x.state === PizzaState.open);
          const readyPizzaOrders = data.filter(x => x.state === PizzaState.ready);
          const deliveredPizzaOrders = data.filter(x => x.state === PizzaState.delivered);

          this.openPizzaOrders$.next(openPizzaOrders);
          this.readyPizzaOrders$.next(readyPizzaOrders);
          this.deliveredPizzaOrders$.next(deliveredPizzaOrders);
        }
      },
      error => console.log(error)
    ));
  }

  private subscribeToppings(): void {
    this.subscriptions.add(this.pizzaLogisticsService.getToppings().subscribe(
      data => this.pizzaToppings$.next(data),
      error => console.log(error)
    ));
  }

  private subscribeDrivers(): void {
    this.subscriptions.add(this.pizzaLogisticsService.getDrivers().subscribe(
      data => {
          const availableDrivers = data.filter(x => x.state === DriverState.ready);
          this.availableDrivers$.next(availableDrivers);
          this.allDrivers$.next(data);
      },
      error => console.log(error)
    ));
  }
}
