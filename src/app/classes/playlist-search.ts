import * as _ from 'lodash';
import {Playlist} from '../models/favorites/playlist.model';

export class PlaylistSearch {
  constructor (public playlist: Playlist) {}

  hasItems () {
    return !_.isNull(this.playlist);
  }
}