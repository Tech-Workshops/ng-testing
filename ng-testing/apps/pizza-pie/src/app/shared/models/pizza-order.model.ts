import { PizzaState } from '../enums/pizza-state.enum';
import { PizzaSize } from './pizza-size.model';

export class PizzaOrder {
    public id = '';
    public customerName = '';
    public toppings: number[] = [];
    public size: PizzaSize | undefined;
    public state: PizzaState = PizzaState.Open
    public driverId? = '';
}
