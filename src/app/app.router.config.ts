import { Route } from '@angular/router';
import {FavoritesComponent} from './views/favorites/favorites.component';
import { LoginComponent } from './views/login/login.component';

export const RouterConfig: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search',
    component: FavoritesComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];