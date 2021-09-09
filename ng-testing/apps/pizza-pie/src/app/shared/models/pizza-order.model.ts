import { PizzaState } from '../enums/pizza-state.enum';
import { Driver } from './driver.model';

export class PizzaOrder {
    id: string;
    customerName: string;
    toppings: number[] = [];
    size: number;
    state: PizzaState;
    driverId: string;
}
