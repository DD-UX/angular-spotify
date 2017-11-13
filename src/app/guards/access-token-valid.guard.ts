import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

import * as _ from 'lodash';

import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AccessTokenValidGuard implements CanActivate {
  constructor (
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // When load a URL by demand for the first time,
    // need to get token and login
    if (
      _.isNull(this.auth.authInfo$.getValue().user)
      && this.auth.token.size > 0
    ) {
      this.auth.checkToken();
      return true;
    }

    return this.auth.authInfo$
      .map(authInfo => authInfo.isLoggedIn())
      .take(1)
      .do(allowed => {
        if (!allowed) {
          this.router.navigate(['/login']);
        }
      });
  }
}
