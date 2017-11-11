import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as _ from 'lodash';

@Injectable()
export class AuthService {

  // Checks for the incoming message with the token
  checkToken (): void {
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

  // isLoggedIn():Observable<boolean> {
  //   return false;
  // }

  connect () { }
}
