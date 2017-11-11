import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import * as App from '../../app.config';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class FavoritesService {
  private token = new Map(JSON.parse(localStorage.getItem('spotify_token')));
  private user = this.auth.authInfo$.value.user;

  constructor(private http: HttpClient, private auth: AuthService) { }

  getList () {
    return this.http.get(App.USER_URL + App.FEATURED_PLAYLISTS, {
      headers: this.auth.headers
    });
  }

}
