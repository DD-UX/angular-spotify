import { Route } from '@angular/router';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { SearchComponent } from './views/search/search.component';
import { LoginComponent } from './views/login/login.component';
import { AccessTokenValidGuard } from './guards/access-token-valid.guard';

export const RouterConfig: Route[] = [
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
