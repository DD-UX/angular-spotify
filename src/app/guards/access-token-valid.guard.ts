import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

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
    // Check for token in URL
    return this.auth.checkToken()
      .subscribe (
        data => {
          console.log('isLoggedIn subscribe data: ', data);
          return true;
        },
        error => {
          console.log('Error: ', error);
          return false;
        }
      );
  }
}
