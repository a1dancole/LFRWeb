import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SideMenuService } from '../../services/side-menu.service';
import { UserCookieService } from '../../services/userCookie.service';

@Component({
  selector: 'side-menu',
  styleUrls: ['./side-menu.component.scss'],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer!: MatDrawer;
  public isLoggedIn: boolean = false;

  constructor(
    private _sideMenuService: SideMenuService,
    private _userCookieService: UserCookieService,
    private _router: Router
  ) {
    _userCookieService.isLoggedIn.subscribe((event) => {
      this.isLoggedIn = event;
    });
  }

  ngOnInit(): void {
    this._sideMenuService.toggled.subscribe((toggle) =>
      this.toggleDrawer(toggle)
    );
  }

  public toggleDrawer(toggle: boolean): void {
    this.drawer.toggle(toggle);
  }

  public logOut(): void {
    this._userCookieService.logOut();
    this._router.navigateByUrl('/');
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  ngOnDestroy(): void {
    if (this._sideMenuService) {
      this._sideMenuService.toggled.unsubscribe();
    }
  }
}
