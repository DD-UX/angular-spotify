import {
  Component, EventEmitter, OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  connect () {
    this.isFormDisabled = true;
    this.auth.connect();
  }

  constructor(public auth: AuthService) {

  }

  ngOnInit() {
  }

}
