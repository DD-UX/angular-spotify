import { Injectable } from '@angular/core';
import * as App from '../app.config';


@Injectable()
export class AuthService {
  connect () {
    console.log("URL is: ", App.LOGIN_URL(['user-read-email']));
    console.log("connecting to the database...");
  }
}
