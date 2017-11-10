import { Component } from '@angular/core';

@Component({
  selector: 'fdv-root',
  template: `
    <fdv-navigation></fdv-navigation>
    <fdv-favorites></fdv-favorites>
  `,
  styles: []
})
export class AppComponent {
  title = 'fdv';
}
