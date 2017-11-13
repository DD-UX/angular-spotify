import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlaylistsService } from '../../services/playlists/playlists.service';
import { PlaylistItem} from '../../models/favorites/playlist.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'fdv-typeahead',
  templateUrl: './typeahead.component.tpl.html',
  styleUrls: ['./_typeahead.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypeaheadComponent implements OnInit {
  public loading = false;
  public results$: Observable<PlaylistItem[]>;

  constructor(public playlists: PlaylistsService) {}

  doSearch ($event): void {
    $event.preventDefault();

    this.loading = true;

    this.playlists.search($event.target.value)
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
