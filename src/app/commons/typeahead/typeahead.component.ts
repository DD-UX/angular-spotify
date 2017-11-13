import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlaylistsService } from '../../services/playlists/playlists.service';
import { PlaylistItem} from '../../models/favorites/playlist.model';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  selector: 'fdv-typeahead',
  templateUrl: './typeahead.component.tpl.html',
  styleUrls: ['./_typeahead.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypeaheadComponent implements OnInit {
  public loading = false;
  public results$: Observable<PlaylistItem[]> = null;

  constructor(public playlists: PlaylistsService) {}

  doSearch ($event): void {
    $event.preventDefault();
    const query: string = $event.target.value;

    if (query.length <= 0) {
      return this.results$ = null;
    }

    this.loading = true;

    this.playlists.search(query)
      .map(res => res.playlists.items)
      .subscribe (
        items => {
          this.results$ = items;
          this.loading = false;
        },
        error => error);
  }

  ngOnInit() {}

}
