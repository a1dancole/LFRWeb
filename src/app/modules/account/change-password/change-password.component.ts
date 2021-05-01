import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserCookieService } from '../../shared/services/userCookie.service';
import { AccountService } from '../account.service';
import { ChangePassword } from '../models/changePassword';

@Component({
  styleUrls: ['./change-password.component.scss'],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit {
  public form!: FormGroup;

  public passwordChanging: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _accountService: AccountService,
    private _router: Router,
    private _userCookieService: UserCookieService
  ) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    });
  }

  public changePassword() {
    let currentPassword = this.form.get('currentPassword')?.value;
    let newPassword = this.form.get('newPassword')?.value;
    let confirmNewPassword = this.form.get('confirmNewPassword')?.value;

    if (!(!!currentPassword || !!newPassword || !!confirmNewPassword)) {
      return;
    }

    let loggedInUser = this._userCookieService.getLoggedInUser();

    if (loggedInUser) {
      if (newPassword !== confirmNewPassword) {
        this._snackBar.open(`Password's do not match`, 'Error', {
          duration: 2000,
          panelClass: ['warning'],
        });
        return;
      }

      let changePasswordModel: ChangePassword = {
        userName: loggedInUser.username,
        currentPassword: currentPassword,
        newPassword: newPassword,
      };

      this.passwordChanging = true;

      this._accountService
        .changePassword(changePasswordModel)
        .subscribe(
          (response) => {
            this._router.navigate(['/account']);
          },
          (error: any) => {
            console.log(error);
            this._snackBar.open(`${error.error.detail}`, 'Error', {
              duration: 2000,
              panelClass: ['warning'],
            });
          }
        )
        .add(() => {
          this.passwordChanging = false;
        });
    } else this._router.navigateByUrl('/login');
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
