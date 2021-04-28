import { Component } from "@angular/core";
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

  constructor(private _sideMenuService: SideMenuService, private _userCookieService: UserCookieService) {
    _userCookieService.isLoggedIn.subscribe(event => {
      this.isLoggedIn = event ?? false;
    })
  }

  public toggleSideMenu(): void {
    this._sideMenuService.toggleSideMenu();
    this.sideMenuOpen = !this.sideMenuOpen;
  }

  public logOut(): void {
    this._userCookieService.logOut();
  }
}
