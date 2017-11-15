import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { ReloadComponent } from './reload/reload.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [NavigationComponent, TypeaheadComponent, ToggleComponent, ReloadComponent],
  exports: [NavigationComponent, TypeaheadComponent, ToggleComponent]
})
export class CommonsModule { }
