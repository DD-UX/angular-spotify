import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fdv-login',
  templateUrl: './login.component.tpl.html',
  styleUrls: [
    './_login.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public today: Date = new Date();

  constructor() {}

  ngOnInit() {
  }

}
