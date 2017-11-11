import {
  Component, EventEmitter, OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import { AuthService } from '../../services/auth.service';

import * as App from '../../app.config';

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
  public isFormDisabled = false;
  public spotifyUrl = App.LOGIN_URL(['user-read-email']);

  constructor(private auth: AuthService) {
  }

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  connect () {
    window.location.href = this.spotifyUrl;
  }

  ngOnInit() {
    this.auth.checkToken();
  }

}
