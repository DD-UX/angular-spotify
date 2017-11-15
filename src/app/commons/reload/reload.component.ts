import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {PlaylistsService} from '../../services/playlists/playlists.service';
import {CommonService} from '../../services/common/common.service';

@Component({
  selector: 'fdv-reload-playlist',
  template: `
    <button class="btn btn-success btn-sm" title="Reload playlist"
            (click)="refreshFavorites()">
      <i class="fa fa-refresh fa-fw"
         [ngClass]="{'fa-spin': loading}"></i>
    </button>
  `,
  styles: [``],
  encapsulation: ViewEncapsulation.None
})
export class ReloadComponent implements OnInit {
  public loading = false;

  refreshFavorites () {
    this.loading = true;
    this.playlists.getList(true, () => this.loading = false);
  }

  constructor(private playlists: PlaylistsService) { }

  ngOnInit() {
  }

}
