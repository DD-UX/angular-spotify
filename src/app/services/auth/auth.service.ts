import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { User } from '../../models/auth/user.model';

import * as App from '../../app.config';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Injectable()
class AuthInfo {
  constructor (public user: User | any) {}

  isLoggedIn () {
    return !_.isNull(this.user);
  }
}

@Injectable()
export class AuthService {

  static UNKNOW_USER = new AuthInfo(null);

  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOW_USER);

  // Token map
  private token = new Map(JSON.parse(localStorage.getItem('spotify_token'))) || new Map ();

  public headers: any;

  constructor (private http: HttpClient, private router: Router) {}

  // Checks for token availability or listen its incoming
  checkToken (): any {
    if (this.token.size > 0){
      // Set headers
      this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token.get('access_token'));

      this.login();
    }

    return this.listenTokenMessage();
  }

  // Listens message sent from Spotify with token data
  listenTokenMessage () {
    window.addEventListener('message', () => {
      // If no hash, exit
      if (_.isEmpty(window.location.hash)) {
        return false;
      }

      const url: any = window.location.hash
        .replace(/^\#/, '')
        .split('&');

      url.forEach((node) => {
        const u: object = node.split('=');
        this.token.set(u[0], u[1]);
      });

      // Set local storage of token
      localStorage.setItem('spotify_token', JSON.stringify(Array.from(this.token.entries())));

      // Set headers
      this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token.get('access_token'));

      this.login();
    }, false);
  }

  // Retrieves user's data based on token stored or flags token is invalid
  login(): void {

    this.http
      .get<User>(App.USER_URL + '/me', {
        headers: this.headers
      })
      .subscribe (
        data => {
          this.authInfo$.next(new AuthInfo(data));
          this.router.navigate(['/favorites']);
        },
        error => {
          console.log(error);
          if (_.isEqual(error.status, 401)) {
            this.destroyToken();
            this.router.navigate(['/login']);
          }
          this.authInfo$.error(error);
        }
      );
  }

  logout(): void {
    this.destroyToken();
    this.authInfo$.next(AuthService.UNKNOW_USER);
    this.router.navigate(['/login']);
  }

  destroyToken () {
    localStorage.removeItem('spotify_token');
    this.token = new Map();
  }
}
