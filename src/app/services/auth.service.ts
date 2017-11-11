import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import * as App from '../app.config';
import * as _ from 'lodash';

@Injectable()
export class AuthService {
  private token = new Map ();

  constructor (private http: HttpClient) {}

  // Checks for the incoming message with the token
  checkToken (): void {

    // Listens Spotify authentication factor
    window.addEventListener('message', () => {
      if (_.isUndefined(window.location.hash)) {
        return false;
      }

      const url: any = window.location.hash
        .replace(/^\#/, '')
        .split('&');

      url.forEach((node) => {
        const u: object = node.split('=');
        this.token.set(u[0], u[1]);
      });

      console.log(this.token);

      this.isLoggedIn();
    }, false);
  }

  isLoggedIn():boolean {
    this.http
      .get(App.USER_URL, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token.get('access_token'))
      })
      .subscribe(data => {
        console.log(data);
      });

    return false;
  }

  connect () { }
}
