import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaLogisticsComponent } from './pizza-logistics/pizza-logistics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'logistics'
  },
  {
    path: 'logistics',
    component: PizzaLogisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaLogisticsRoutingModule { }
