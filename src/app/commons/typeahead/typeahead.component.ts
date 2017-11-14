import {
  Component, HostListener, OnInit,
  ViewEncapsulation
} from '@angular/core';
import { PlaylistsService } from '../../services/playlists/playlists.service';
import { PlaylistItem} from '../../models/favorites/playlist.model';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

import * as _ from 'lodash';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/filter';
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
  public results$: Observable<PlaylistItem[]> | any = [];
  public listVisible = false;
  public noResults = false;
  private favoritesList: any;

  // Click on document closes the dropdown
  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  closeSearchList ($event) {
    if (!_.isEqual($event.target.id, 'searchPlaylists')) {
      this.listVisible = false;
      this.noResults = false;
    }
  }

  openSearchList () {
    this.listVisible = this.results$.length > 0;
    this.noResults = this.results$.length < 1;
  }

  setFavorite (playlist) {
    const that = this;
    const playlistFound = this.favoritesList.find(pl => pl.id === playlist.id);
    const isInFavorites = Boolean(playlistFound);

    if (isInFavorites) {
      console.log('Removing from favorites');
    } else {
      this.playlists.addToFavorites(playlist)
        .subscribe(
          res => {
            add(res);
          },
          error => {
            add(error);
          }
        );
    }

    function add (res) {
      if (res.status === 200) {
        playlist.isActive = true;
        that.favoritesList.unshift(playlist);
        localStorage.setItem(
          'favorite_list',
          JSON.stringify(that.playlists.playlist$.getValue().playlist)
        );
      }
    }
  }

  constructor(public playlists: PlaylistsService) {}

  ngOnInit() {
    // Declare search field
    this.searchField = new FormControl();

    // Bring data when term changes (debounced 600)
    this.searchField
      .valueChanges
      .debounceTime(600)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .subscribe(term => {
        if (term === '') {
          return [];
        }
        return this.playlists.search(term)
          .map(res => res.playlists.items)
          .do(_ => this.loading = false)
          .subscribe (
            items => {
              // Get list of favorite playlist in the local scope
              this.favoritesList = this.playlists.playlist$.getValue().playlist.items;

              items.map(item => {
                item.isActive = Boolean(this.favoritesList.find(pl => pl.id === item.id));
              });

              this.listVisible = items.length > 0;
              this.noResults = items.length < 1;
              this.results$ = items;
            },
            error => {
              console.log(error);
            }
          );
      });


  }

}
