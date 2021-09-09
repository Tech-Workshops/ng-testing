import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { NavItem } from '../models/nav-item.model';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss']
})
export class NavListItemComponent implements OnInit {
  @Input() item: NavItem;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  itemSelected(item: NavItem) {
    this.router.navigate([item.route]);
  }
}
