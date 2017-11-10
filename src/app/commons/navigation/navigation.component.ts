import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fdv-navigation',
  template: `
    <p>
      navigation works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
