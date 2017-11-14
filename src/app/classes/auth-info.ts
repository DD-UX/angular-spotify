import * as _ from 'lodash';
import {User} from '../models/auth/user.model';

export class AuthInfo {
  constructor (public user: User | any) {}

  isLoggedIn () {
    return !_.isNull(this.user);
  }
}
