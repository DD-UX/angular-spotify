import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlaylistsService } from '../../services/playlists/playlists.service';
import { PlaylistItem} from '../../models/favorites/playlist.model';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'fdv-typeahead',
  templateUrl: './typeahead.component.tpl.html',
  styleUrls: ['./_typeahead.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypeaheadComponent implements OnInit {
  public loading = false;
  public searchField: FormControl;
  public results$: Observable<PlaylistItem[]> = null;

  constructor(public playlists: PlaylistsService) {}

  doSearch ($event): void {
    $event.preventDefault();

    const query: string = $event.target.value;

    if (query.length <= 0) {
      return this.results$ = null;
    }
    this.loading = true;
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField
      .valueChanges
      .debounceTime(600)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .subscribe(term => {
        return this.playlists.search(term)
          .map(res => res.playlists.items)
          .do(_ => this.loading = false)
          .subscribe (
            items => {
              this.results$ = items;
            },
            error => error
          );
      });


  }

}
