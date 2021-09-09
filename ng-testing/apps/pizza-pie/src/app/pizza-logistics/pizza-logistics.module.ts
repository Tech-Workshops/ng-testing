import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { DeliveredOrdersComponent } from './delivered-orders/delivered-orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ReadyForDeliveryComponent } from './ready-for-delivery/ready-for-delivery.component';

import { PizzaLogisticsRoutingModule } from './pizza-logistics-routing.module';
import { PizzaLogisticsComponent } from './pizza-logistics/pizza-logistics.component';
import { OpenOrdersComponent } from './open-orders/open-orders.component';
import { OpenOrdersItemComponent } from './open-orders-item/open-orders-item.component';
import { ReadyForDeliveryItemComponent } from './ready-for-delivery-item/ready-for-delivery-item.component';
import { DeliveredOrdersItemComponent } from './delivered-orders-item/delivered-orders-item.component';


@NgModule({
  declarations: [
    PizzaLogisticsComponent,
    NewOrderComponent,
    OpenOrdersComponent,
    ReadyForDeliveryComponent,
    DeliveredOrdersComponent,
    OpenOrdersComponent,
    OpenOrdersItemComponent,
    ReadyForDeliveryItemComponent,
    DeliveredOrdersComponent,
    DeliveredOrdersItemComponent
  ],
  imports: [
    CommonModule,
    PizzaLogisticsRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class PizzaLogisticsModule { }
