import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavigationComponent, TypeaheadComponent],
  exports: [NavigationComponent, TypeaheadComponent]
})
export class CommonsModule { }
