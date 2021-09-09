import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DriverState } from '../../../shared/enums/driver-state.enum';
import { PizzaState } from '../../../shared/enums/pizza-state.enum';
import { Driver } from '../../../shared/models/driver.model';
import { PizzaOrder } from '../../../shared/models/pizza-order.model';
import { PizzaSize } from '../../../shared/models/pizza-size.model';
import { PizzaTopping } from '../../../shared/models/pizza.topping';
import { DriversService } from '../drivers/drivers.service';
import { OrdersService } from '../orders/orders.service';
import { SizesService } from '../sizes/sizes.service';
import { ToppingsService } from '../toppings/toppings.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaLogisticsService {
  private orders: PizzaOrder[] = [];
  private drivers: Driver[] = [];
  private toppings: PizzaTopping[] = [];
  private sizes: PizzaSize[] = [];

  private orders$: BehaviorSubject<PizzaOrder[]> = new BehaviorSubject<PizzaOrder[]>([]);
  private drivers$: BehaviorSubject<Driver[]> = new BehaviorSubject<Driver[]>([]);
  private toppings$: BehaviorSubject<PizzaTopping[]> = new BehaviorSubject<PizzaTopping[]>([]);
  private sizes$: BehaviorSubject<PizzaSize[]> = new BehaviorSubject<PizzaSize[]>([]);

  constructor(
    private ordersService: OrdersService,
    private driversService: DriversService,
    private toppingsService: ToppingsService,
    private sizesService: SizesService) {
  }

  public createNewOrder(order: PizzaOrder): void {
    order.state = PizzaState.Open;
    this.ordersService.placeOrder(order).subscribe(
      data => this.updateOrders(data),
      error => console.log(error)
      );
  }

  public getOrders(): BehaviorSubject<PizzaOrder[]> {
    if (this.orders.length === 0) {
      this.ordersService.getOrders().subscribe(
        data => {
          this.orders = data;
          this.orders$.next(this.orders);
        },
        error => console.log(error)
      );
    }

    return this.orders$;
  }

  public getDrivers(): BehaviorSubject<Driver[]> {
    if (this.drivers.length === 0) {
      this.driversService.getDrivers().subscribe(
        data => {
          this.drivers = data;
          this.drivers$.next(this.drivers);
        },
        error => console.log(error)
      );
    }

    return this.drivers$;
  }

  public getDriverById(id: string): Driver | undefined{
    return this.drivers.find(x => x.id === id);
  }

  public getToppings(): BehaviorSubject<PizzaTopping[]> {
    if (this.toppings.length === 0) {
      this.toppingsService.getToppings().subscribe(
        data => {
          this.toppings = data;
          this.toppings$.next(this.toppings);
        },
        error => console.log(error)
      );
    }

    return this.toppings$;
  }

  public getToppingById(id: number): PizzaTopping | undefined {
    return this.toppings.find(x => x.id === id);
  }

  public getSizes(): BehaviorSubject<PizzaSize[]> {
    if (this.sizes.length === 0) {
      this.sizesService.getSizes().subscribe(
        data => {
          this.sizes = data;
          this.sizes$.next(this.sizes);
        },
          error => console.log(error)
      );
    }

    return this.sizes$;
  }

  public placeNewOrder(pizzaOrder: PizzaOrder): void {
    this.ordersService.placeOrder(pizzaOrder).subscribe(
      data => this.updateOrders(data),
      error => console.log(error)
    );
  }

  public sendToKitchen(pizzaOrder: PizzaOrder): void {
    this.cookPizza(pizzaOrder);
  }

  public assignDriver(pizzaOrder: PizzaOrder, driverId: string): void {
    this.deliverPizza(pizzaOrder, driverId);
  }

  private updateOrders(pizzaOrder: PizzaOrder): void {
    this.orders.push(pizzaOrder);
    this.orders$.next(this.orders);
  }

  private setDriverState(driverId: string, state: DriverState): void {
    const driver = this.drivers.find(x => x.id === driverId);

    if (!driver) {
      return;
    }

    driver.state = state;
    this.driversService.updateDriverState(driver, state);
    this.drivers$.next(this.drivers);
  }

  private setOrderState(pizzaOrder: PizzaOrder, state: PizzaState): void {
    const pizzaOrderInArray = this.orders.find(x => x.id === pizzaOrder.id);

    if (!pizzaOrderInArray) {
      return;
    }

    pizzaOrderInArray.state = state;

    this.ordersService.updateOrder(pizzaOrderInArray);
    this.orders$.next(this.orders);
  }

  private cookPizza(pizzaOrder: PizzaOrder): void {
    const baseCookingTime = 5;
    let toppingsCookingTime = 0;

    if (pizzaOrder.toppings.length > 0) {
        toppingsCookingTime =
          pizzaOrder.toppings.reduce((sum, current) => {
            return sum + (this.getTopping(current)?.time || 0);
          });
    }

    this.setOrderState(pizzaOrder, PizzaState.Cooking);

    setTimeout(() => {
      this.setOrderState(pizzaOrder, PizzaState.Ready);
    }, (baseCookingTime + toppingsCookingTime) * 1000);
  }

  private deliverPizza(pizzaOrder: PizzaOrder, driverId: string): void {
    this.setDriverState(driverId, DriverState.EnRoute);
    pizzaOrder.driverId = driverId;
    this.setOrderState(pizzaOrder, PizzaState.EnRoute);

    setTimeout(() => {
      this.setOrderState(pizzaOrder, PizzaState.Delivered);
      this.setDriverState(driverId, DriverState.Ready);
    }, 15000);
  }

  private getTopping(id: number): PizzaTopping | undefined {
    return this.toppings.find(x => x.id === id);
  }
}
