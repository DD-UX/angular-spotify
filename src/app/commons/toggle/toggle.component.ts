import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {PlaylistsService} from '../../services/playlists/playlists.service';
import {CommonService} from '../../services/common/common.service';

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
      const confirmation = confirm('Are you sure you want to unfollow this playlist?');

      if (!confirmation){
        return false;
      }

      this.globals.loading(true);

      this.playlists.removeFromFavorites(playlist)
        .subscribe(
          res => {
            this.playlists.removePlaylistLocal(res, playlist);
            this.globals.loading(false);
          },
          error => {
            this.playlists.removePlaylistLocal(error, playlist);
            this.globals.loading(false);
          }
        );
    } else {
      this.globals.loading(true);

      this.playlists.addToFavorites(playlist)
        .subscribe(
          res => {
            this.playlists.addPlaylistLocal(res, playlist);
            this.globals.loading(false);
          },
          error => {
            this.playlists.addPlaylistLocal(error, playlist);
            this.globals.loading(false);
          }
        );
    }
  }

  constructor(public playlists: PlaylistsService, private globals: CommonService) { }

  ngOnInit() {
  }

}
