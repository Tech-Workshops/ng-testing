import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';

import { PizzaDashboardRoutingModule } from './pizza-dashboard-routing.module';
import { PizzaDashboardComponent } from './pizza-dashboard/pizza-dashboard.component';

@NgModule({
  declarations: [
    PizzaDashboardComponent,
  ],
  exports: [
    PizzaDashboardComponent,
  ],
  imports: [
    PizzaDashboardRoutingModule,
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
  ],
})
export class PizzaDashboardModule { }
