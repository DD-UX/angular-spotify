import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FavoritesService} from '../../services/favorites/favorites.service';

@Component({
  selector: 'fdv-favorites',
    templateUrl: './favorites.component.tpl.html',
    styleUrls: ['./_favorites.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FavoritesComponent implements OnInit {

  constructor(private favorites: FavoritesService) {}

  ngOnInit() {
    this.favorites.getList();
  }

}
