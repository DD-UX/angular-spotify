import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../models/auth/user';

import * as App from '../app.config';
import * as _ from 'lodash';
import {_throw} from 'rxjs/observable/throw';

@Injectable()
export class AuthService {
  private token = new Map(JSON.parse(localStorage.getItem('spotify_token'))) || new Map ();

  constructor (private http: HttpClient) {}

  // Checks for token availability or listen its incoming
  checkToken (): any {
    if (this.token.size > 0){
      return this.isLoggedIn();
    }

    return this.listenTokenMessage();
  }

  // Listens message sent from Spotify with token data
  listenTokenMessage () {
    window.addEventListener('message', () => {
      // If no hash, exit
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

      localStorage.setItem('spotify_token', JSON.stringify(Array.from(this.token.entries())));

      this.isLoggedIn();
    }, false);
  }

  // Retrieves user's data based on token stored or flags token is invalid
  isLoggedIn(): any {
    return this.http
      .get<User>(App.USER_URL, {
        headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.token.get('access_token'))
      });
  }
}
