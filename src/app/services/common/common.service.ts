import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  loading (flag: boolean): void {
    if (flag) {
      document.body.classList.add('loading');
    } else {
      document.body.classList.remove('loading');
    }
  }
}
