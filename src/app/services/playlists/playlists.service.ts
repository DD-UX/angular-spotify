import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {AuthService} from '../auth/auth.service';

import { Playlist } from '../../models/favorites/playlist.model';
import { PlaylistInfo } from '../../classes/playlist-info';

import * as App from '../../app.config';
import * as _ from 'lodash';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlaylistsService {
  // Making playlist$ Observable
  static LOCAL_PLAYLISTS = new PlaylistInfo(JSON.parse(localStorage.getItem('favorite_list')));
  public playlist$: BehaviorSubject<PlaylistInfo> = new BehaviorSubject<PlaylistInfo>(PlaylistsService.LOCAL_PLAYLISTS);

  // Local definitions
  private token = new Map(JSON.parse(localStorage.getItem('spotify_token')));
  private user = this.auth.authInfo$.value.user;

  constructor(private http: HttpClient, private auth: AuthService) {}

  getList (): Observable<any> | Promise<any> | any {

    // If playlist is locally stored, return
    if (!_.isNull(this.playlist$.getValue().playlist)) {
      return false;
    }

    // Get playlist from API
    this.http.get<Playlist>(App.USER_URL + '/me/playlists', {
      headers: this.auth.headers
    })
      .subscribe (
        data => {
          // Update observable with data
          this.playlist$.next(new PlaylistInfo(data));

          // Set local storage of token
          localStorage.setItem('favorite_list', JSON.stringify(data));
        },
        error => error);
  }

  search (term: string): Observable<any> | Promise<any> | any {
    return this.http.get<Playlist>(App.USER_URL + '/search', {
      headers: this.auth.headers,
      params: {
        type: 'playlist',
        q: term
      }
    });
  }
}
