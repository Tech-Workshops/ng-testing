import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaOrder } from '../../../shared/models/pizza-order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private uri = 'http://localhost:4300/orders';

  constructor(private httpClient: HttpClient) { }

  public getOrders(): Observable<PizzaOrder[]> {
    return this.httpClient.get<PizzaOrder[]>(this.uri);
  }

  public placeOrder(pizzaOrder: PizzaOrder): Observable<PizzaOrder> {
    return this.httpClient.post<PizzaOrder>(this.uri, pizzaOrder);
  }

  public updateOrder(pizzaOrder: PizzaOrder): Observable<PizzaOrder> {
    return this.httpClient.put<PizzaOrder>(this.uri, pizzaOrder);
  }
}
