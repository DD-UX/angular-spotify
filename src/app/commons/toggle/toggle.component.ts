import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {PlaylistsService} from '../../services/playlists/playlists.service';

@Component({
  selector: 'fdv-toggle',
  template: `
    <div (click)="setFavorite(playlist)" class="pr-4 pl-2 text-warning fdvToggle">
      <i *ngIf="playlist.isActive" class="fa fa-star fa-2x"></i>
      <i *ngIf="!playlist.isActive" class="fa fa-star-o fa-2x"></i>
    </div>
  `,
  styles: [`
    .fdvToggle {
      cursor: pointer;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class ToggleComponent implements OnInit {
  @Input() playlist: any;

  // Get list of favorite playlist in the local scope
  private favoritesList = this.playlists.playlist$.getValue().playlist.items;

  setFavorite (playlist) {
    const playlistFound = this.favoritesList.find(pl => pl.id === playlist.id);
    const isInFavorites = Boolean(playlistFound);

    if (isInFavorites) {
      this.playlists.removeFromFavorites(playlist)
        .subscribe(
          res => {
            this.playlists.removePlaylistLocal(res, playlist);
          },
          error => {
            this.playlists.removePlaylistLocal(error, playlist);
          }
        );
    } else {
      this.playlists.addToFavorites(playlist)
        .subscribe(
          res => {
            this.playlists.addPlaylistLocal(res, playlist);
          },
          error => {
            this.playlists.addPlaylistLocal(error, playlist);
          }
        );
    }
  }

  constructor(public playlists: PlaylistsService) { }

  ngOnInit() {
  }

}
