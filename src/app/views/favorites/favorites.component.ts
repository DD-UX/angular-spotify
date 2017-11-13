import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlaylistsService } from '../../services/playlists/playlists.service';

@Component({
  selector: 'fdv-favorites',
    templateUrl: './favorites.component.tpl.html',
    styleUrls: ['./_favorites.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FavoritesComponent implements OnInit {

  constructor(public favorites: PlaylistsService) {}

  ngOnInit() {
    this.favorites.getList();
  }

}
