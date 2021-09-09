import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { PizzaLogisticsService } from '../../core/services/pizza-logistics/pizza-logistics.service';
import { SizesService } from '../../core/services/sizes/sizes.service';
import { PizzaOrder } from '../../shared/models/pizza-order.model';
import { PizzaSize } from '../../shared/models/pizza-size.model';
import { PizzaTopping } from '../../shared/models/pizza.topping';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit, OnDestroy {
  @Input() toppings$: Observable<PizzaTopping[]>;
  @Input() sizes$: Observable<PizzaSize[]>;

  public formGroup: FormGroup;
  public sizes: PizzaSize[] = [];
  public pizzaToppings: PizzaTopping[] = [];

  private formBuilder = new FormBuilder();
  private toppingsSubscription = new Subscription();
  private sizesSubscription = new Subscription();

  constructor(
    private pizzaLogisticsService: PizzaLogisticsService,
    private sizesService: SizesService) {
  }

  ngOnInit() {
    this.createFormGroup();
    this.subscribeSizes();
    this.subscribeToppings();
  }

  ngOnDestroy() {
    this.sizesSubscription.unsubscribe();
  }

  public submitOrder() {
    let pizzaOrder: PizzaOrder;
    pizzaOrder = { ...this.formGroup.value };

    this.pizzaLogisticsService.createNewOrder(pizzaOrder);
    this.formGroup.reset();
  }

  private subscribeSizes(): void {
    this.sizesSubscription = this.sizesService.getSizes().subscribe(
      data => this.sizes = data,
      err => console.log(err)
    );
  }

  private subscribeToppings(): void {
    this.toppingsSubscription = this.toppings$.subscribe(
      data => this.pizzaToppings = data,
      error => console.log(error)
    );
  }

  private createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      customerName: '',
      toppings: '',
      size: ''
    });
  }
}
