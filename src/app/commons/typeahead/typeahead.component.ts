import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlaylistsService } from '../../services/playlists/playlists.service';

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

  constructor(public playlists: PlaylistsService) {}

  ngOnInit() {
    this.playlists.search('weekend')
      .map(res => res.playlists.items)
      .subscribe (
        data => {
          console.log(data);
        },
        error => error);
  }

}
