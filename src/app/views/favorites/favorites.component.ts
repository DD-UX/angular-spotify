import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FavoritesService} from '../../services/favorites/favorites.service';
import {Playlist} from '../../models/favorites/playlist.model';

@Component({
  selector: 'fdv-favorites',
    template: `
      <fdv-navigation></fdv-navigation>
      <div class="container">
        <ul *ngIf="!!favoritesList"
            class="list-unstyled favorites__list row">
          <li *ngFor="let playlist of favoritesList.items"
              class="media mt-4 d-flex flex-column col-6 align-items-center col-md-4 col-xl-3">
            <img class="mb-3 rounded-circle" [src]="playlist.images[0].url" [alt]="playlist.name">
            <div class="media-body">
              <h5 class="mb-2">{{playlist.name}}</h5>
            </div>
          </li>
        </ul>
      </div>
    `,
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
