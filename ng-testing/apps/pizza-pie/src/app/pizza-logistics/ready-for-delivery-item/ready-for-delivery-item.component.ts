import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { PizzaLogisticsService } from '../../core/services/pizza-logistics/pizza-logistics.service';
import { Driver } from '../../shared/models/driver.model';
import { PizzaOrder } from '../../shared/models/pizza-order.model';

@Component({
  selector: 'app-ready-for-delivery-item',
  templateUrl: './ready-for-delivery-item.component.html',
  styleUrls: ['./ready-for-delivery-item.component.scss']
})
export class ReadyForDeliveryItemComponent implements OnInit {
  @Input() order: PizzaOrder;
  @Input() availableDrivers$: Observable<Driver[]>;

  public formGroup: FormGroup;
  private formBuilder = new FormBuilder();

  constructor(private pizzaLogisticsService: PizzaLogisticsService) { }

  public ngOnInit(): void {
    this.createFormGroup();
  }

  public assignDriver(): void {
    const selectedDriverId = this.formGroup.value.driverId;
    this.pizzaLogisticsService.assignDriver(this.order, selectedDriverId);
  }

  private createFormGroup(): void {
    this.formGroup = this.formBuilder.group ({
      driverId: ''
    });
  }
}
