import { Component } from '@angular/core';

@Component({
  selector: 'fdv-root',
  template: `
    <fdv-navigation></fdv-navigation>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'fdv';
}
