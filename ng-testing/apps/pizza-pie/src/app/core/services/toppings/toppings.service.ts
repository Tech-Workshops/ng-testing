import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaTopping } from '../../../shared/models/pizza.topping';


@Injectable({
  providedIn: 'root'
})
export class ToppingsService {

  private getUrl = 'http://localhost:4300/toppings';
  constructor(private httpClient: HttpClient) { }

  public getToppings(): Observable<PizzaTopping[]> {
    return this.httpClient.get<PizzaTopping[]>(this.getUrl);
  }
}
