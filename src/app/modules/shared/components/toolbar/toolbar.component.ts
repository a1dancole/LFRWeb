import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SideMenuService } from "../../services/side-menu.service";
import { UserCookieService } from "../../services/userCookie.service";

@Component({
  selector: 'toolbar',
  styleUrls: ['./toolbar.component.scss'],
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  public isLoggedIn: boolean = false;
  public sideMenuOpen: boolean = false;

  constructor(private _sideMenuService: SideMenuService, private _userCookieService: UserCookieService, private _router: Router) {
    _userCookieService.isLoggedIn.subscribe(event => {
      this.isLoggedIn = event ?? false;
    })
    _sideMenuService.toggled.subscribe(toggled => {
      this.sideMenuOpen = toggled;
    })
  }

  public toggleSideMenu(): void {
    this._sideMenuService.toggleSideMenu();
  }

  public logOut(): void {
    this._userCookieService.logOut();
    this._router.navigateByUrl('/');
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  public isPwa(): boolean {
    return (window.matchMedia('(display-mode: standalone)').matches) || ((window.navigator as any).standalone) || document.referrer.includes('android-app://');
}
}
