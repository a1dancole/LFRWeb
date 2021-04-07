import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from '../models/userprofile';

@Injectable({ providedIn: 'root' })
export class UserCookieService {
  private cookieName: string = 'lfr_loggedin';

  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private _cookieService: CookieService) {
    this.isLoggedIn.next(
      this._cookieService.get(this.cookieName) !== undefined
    );
  }

  public loginUser(userProfile: UserProfile) {
    let expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 1);

    this._cookieService.set(
      this.cookieName,
      JSON.stringify(userProfile),
      expirationDate
    );

    this.isLoggedIn.next(true);
  }

  public logOut() {
    this._cookieService.delete(this.cookieName);
    this.isLoggedIn.next(false);
  }

  public getLoggedInUser(): UserProfile | undefined {
    try {
      return (
        (JSON.parse(this._cookieService.get(this.cookieName)) as UserProfile) ??
        undefined
      );
    } catch (error) {
      return undefined;
    }
  }
}
