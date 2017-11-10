import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FavoritesComponent],
  exports: [FavoritesComponent]
})
export class ViewsModule { }
