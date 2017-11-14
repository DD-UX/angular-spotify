import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { ServicesModule } from '../services/services.module';

import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    ServicesModule
  ],
  declarations: [FavoritesComponent, LoginComponent, SearchComponent]
})
export class ViewsModule { }
