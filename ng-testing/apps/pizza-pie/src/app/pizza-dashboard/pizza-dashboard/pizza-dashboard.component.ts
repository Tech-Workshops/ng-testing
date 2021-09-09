import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PizzaLogisticsService } from '../../core/services/pizza-logistics/pizza-logistics.service';
import { PizzaState } from '../../shared/enums/pizza-state.enum';
import { NavItem } from '../../shared/models/nav-item.model';

@Component({
  selector: 'app-pizza-dashboard',
  templateUrl: './pizza-dashboard.component.html',
  styleUrls: ['./pizza-dashboard.component.scss']
})
export class PizzaDashboardComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  public navItems: NavItem[] = [
    {
      displayName: 'Logistics',
      route: '/logistics',
    }
  ];

  public totalOrderCount = 0;
  public enRouteCount = 0;
  public inKitchenCount = 0;
  public deliveredCount = 0;

  constructor(private pizzaLogisticsService: PizzaLogisticsService) { }

  public ngOnInit(): void {
    this.subscribeOrders();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private subscribeOrders(): void {
    this.subscriptions.add(this.pizzaLogisticsService.getOrders().subscribe(
      data => {
        this.totalOrderCount = data.length || 0;
        this.enRouteCount = data.filter(x => x.state === PizzaState.EnRoute).length || 0;
        this.inKitchenCount = data.filter(x => x.state === PizzaState.Cooking).length || 0;
        this.deliveredCount = data.filter(x => x.state === PizzaState.Delivered).length || 0;
      },
      error => console.log(error)
    ));
  }
}
