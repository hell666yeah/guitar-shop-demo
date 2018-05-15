import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  // We are using the login as static for now. can make changes in this service when we implement actual logic.

  public username = 'admin';
  public password = 'admin';

  constructor() {}
}
