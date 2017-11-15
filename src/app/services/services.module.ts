import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistsService } from './playlists/playlists.service';
import { CommonService } from './common/common.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    PlaylistsService,
    CommonService
  ]
})
export class ServicesModule { }
