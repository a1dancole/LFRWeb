import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  styleUrls: ['./accountDashboard.component.scss'],
  templateUrl: './accountDashboard.component.html',
})
export class AccountDashboardComponent {
  constructor(private _router: Router) { }

  public navigateToChangePassword() {
    this._router.navigateByUrl('/account/changepassword');
  }

  public navigateToUnstuck() {
    this._router.navigateByUrl('/account/unstuck');
  }
}
