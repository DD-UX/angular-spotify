import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [NavigationComponent, TypeaheadComponent],
  exports: [NavigationComponent, TypeaheadComponent]
})
export class CommonsModule { }
