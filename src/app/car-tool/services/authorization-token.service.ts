import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationTokenService {

  public constructor() { }

  public getToken() {
    return 'TEST-TOKEN';
  }

}
