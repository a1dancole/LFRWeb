import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserCookieService } from "../services/userCookie.service";

@Injectable()
export class UserGuard implements CanActivate {

  constructor(private _userCookieService: UserCookieService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this._userCookieService.getLoggedInUser())
      return true;

    return this._router.navigate(['/login'])
  }
}
