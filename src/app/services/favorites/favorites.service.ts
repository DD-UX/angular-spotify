import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import {AuthService} from '../auth/auth.service';
import { Playlist } from '../../models/favorites/playlist.model';

import * as App from '../../app.config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FavoritesService {
  private token = new Map(JSON.parse(localStorage.getItem('spotify_token')));
  private user = this.auth.authInfo$.value.user;

  constructor(private http: HttpClient, private auth: AuthService) { }

  getList () {
    return this.http.get<Playlist>(App.USER_URL + App.FEATURED_PLAYLISTS, {
      headers: this.auth.headers
    });
  }

}
