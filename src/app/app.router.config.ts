import { Route } from '@angular/router';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { SearchComponent } from './views/search/search.component';
import { LoginComponent } from './views/login/login.component';
import { AccessTokenValidGuard } from './guards/access-token-valid/access-token-valid.guard';

export const RouterConfig: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [ AccessTokenValidGuard ]
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [ AccessTokenValidGuard ]
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
