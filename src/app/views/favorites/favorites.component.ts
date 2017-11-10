import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fdv-favorites',
  template: `
    <p>
      favorites works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class FavoritesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
