import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FavoritesService} from '../../services/favorites/favorites.service';

@Component({
  selector: 'fdv-favorites',
    template: `
      <fdv-navigation></fdv-navigation>
      <div class="container">
        <ul class="list-unstyled favorites__list row justify-content-around">
          <li class="media mt-4 d-flex flex-column col-6 align-items-center col-md-3 col-xl-3">
            <img class="mb-3 rounded-circle" src="https://avatars2.githubusercontent.com/u/9665653?s=460&v=4" alt="Placeholder">
            <div class="media-body">
              <h5 class="mb-2">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
        </ul>
      </div>
    `,
    styleUrls: ['./_favorites.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FavoritesComponent implements OnInit {

  constructor(private favorites: FavoritesService) {

  }

  ngOnInit() {
    this.favorites.getList();
  }

}
