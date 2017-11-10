import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';

import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule
  ],
  declarations: [FavoritesComponent, LoginComponent],
  exports: [FavoritesComponent]
})
export class ViewsModule { }
