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
  public isFormDisabled: boolean = false;
  public spotifyUrl:string = App.LOGIN_URL(["user-read-email"]);

  constructor(private auth: AuthService) {
  }

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  connect () {
    window.location.href = this.spotifyUrl;

    window.addEventListener("message", (event) => {
      let hash = JSON.parse(event.data);

      if (hash.type === 'access_token') {
        console.log('Hash: ', hash);
      }
    }, false);
  }

  ngOnInit() {}

}
