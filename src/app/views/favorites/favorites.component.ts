import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FavoritesService} from '../../services/favorites/favorites.service';
import {Playlist} from '../../models/favorites/playlist.model';

@Component({
  selector: 'fdv-favorites',
    templateUrl: './favorites.component.tpl.html',
    styleUrls: ['./_favorites.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FavoritesComponent implements OnInit {
  public favoritesList: Playlist = JSON.parse(localStorage.getItem('favorite_list')) || null;

  constructor(private favorites: FavoritesService) {

  }

  ngOnInit() {
    this.favorites.getList()
      .subscribe (
        data => {
          this.favoritesList = data;
          // Set local storage of token
          localStorage.setItem('favorite_list', JSON.stringify(data));
        },
        error => {
        }
      );
  }

}
