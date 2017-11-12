import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import {AuthService} from '../auth/auth.service';

import { Playlist } from '../../models/favorites/playlist.model';

import * as App from '../../app.config';
import * as _ from 'lodash';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
class PlaylistInfo {
  constructor (public playlist: Playlist) {}

  hasItems () {
    return !_.isNull(this.playlist);
  }
}

@Injectable()
export class FavoritesService {
  // Making playlist$ Observable
  static LOCAL_PLAYLIST = new PlaylistInfo(JSON.parse(localStorage.getItem('favorite_list')));
  public playlist$: BehaviorSubject<PlaylistInfo> = new BehaviorSubject<PlaylistInfo>(FavoritesService.LOCAL_PLAYLIST);

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
    const subject = new Subject<any>();

    this.http.get<Playlist>(App.USER_URL + '/me/playlists', {
      headers: this.auth.headers
    })
    .subscribe (
    data => {
      // Update observable with data
      this.playlist$.next(new PlaylistInfo(data));
      subject.next(data);
      subject.complete();

      // Set local storage of token
      localStorage.setItem('favorite_list', JSON.stringify(data));
    },
    error => error);
  }

}
