import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [NavigationComponent, TypeaheadComponent, ToggleComponent],
  exports: [NavigationComponent, TypeaheadComponent, ToggleComponent]
})
export class CommonsModule { }
