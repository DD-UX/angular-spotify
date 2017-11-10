import { Route } from '@angular/router';
import {FavoritesComponent} from './views/favorites/favorites.component';

export const RouterConfig: Route[] = [
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: '',
    redirectTo: 'favorites',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'favorites'
  }
];