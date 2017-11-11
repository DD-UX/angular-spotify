import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

import * as _ from 'lodash';

@Injectable()
export class AccessTokenValidGuard implements CanActivate {
  constructor (
    private auth: AuthService,
    private router: Router
  ) {}

  checkToken () {
    let data = new Map();

    // Listens Spotify authentication factor
    window.addEventListener('message', (event) => {
      if (_.isUndefined(window.location.hash)) {
        return false;
      }

      let url: any = window.location.hash
        .replace(/^\#/, '')
        .split('&');

      url.forEach((node) => {
        let u: object = node.split('=');
        data.set(u[0], u[1]);
      });

      console.log(data);
    }, false);
  }

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // Check for token in URL
    this.checkToken();







    return true;
  }
}
