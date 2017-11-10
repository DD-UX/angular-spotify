import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './nav-item.model';
import * as _ from 'lodash';

@Component({
  selector: 'fdv-navigation',
  templateUrl: './navigation.component.tpl.html',
  styleUrls: [
    './_navigation.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  // Navigation elements
  public navItems: NavItem[] = [
    {
      path: 'favorites',
      name: 'Favorites'
    },
    {
      path: 'search',
      name: 'Search'
    }
  ];

  // Active route
  public activeNav: string;

  constructor(private _router: Router) {
    this._router.events.subscribe((url:any) => {
      if (!_.isUndefined(url.url)) {
        this.activeNav = url.url.replace(/^\//, "");
      }
    });
  }

  ngOnInit() {
  }

}
