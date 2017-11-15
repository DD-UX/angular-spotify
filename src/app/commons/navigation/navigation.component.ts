import {
  Component, HostListener, OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../models/navigation/nav-item.model';
import * as _ from 'lodash';
import {AuthService} from '../../services/auth/auth.service';
import {HostBinding} from '@angular/compiler/src/core';

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
      path: '/favorites',
      name: 'Favorite Playlists'
    },
    {
      path: '/search',
      name: 'Search'
    }
  ];

  // Active route
  public activeNav: string;

  // Dropdown for users
  public userDDactive = false;

  toggle ($event): void {
    $event.preventDefault();
    $event.stopPropagation();

    this.userDDactive = !this.userDDactive;
  }

  // Click on document closes the dropdown
  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  closeUserDD () {
    this.userDDactive = false;
  }

  // Click on the dropdown won't close it
  @HostListener('click', ['$event'])
  @HostListener('touchstart', ['$event'])
  persistUserDD ($event) {
    $event.stopPropagation();
  }

  isFavoritesView (): boolean {
    return this.router.url === '/favorites';
  }

  constructor(private router: Router, public auth: AuthService) {
    this.router.events.subscribe((route: any) => {
      if (!_.isUndefined(route.url)) {
        this.activeNav = route.url;
      }
    });
  }

  logout () {
    this.auth.logout();
  }

  ngOnInit() {
  }

}
