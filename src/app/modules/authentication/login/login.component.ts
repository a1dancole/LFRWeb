import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserCookieService } from '../../shared/services/userCookie.service';
import { AuthenticationService } from '../authentication.service';
import { Login } from '../models/login';

@Component({
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public loggingIn: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private _userCookieService: UserCookieService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public login(): void {
    let userName = this.form.get('userName')?.value;
    let password = this.form.get('password')?.value;

    if (!(!!userName || !!password)) {
      return;
    }

    let loginModel: Login = {
      userName: userName,
      password: password,
    };

    this.loggingIn = true;
    this._authenticationService
      .login(loginModel)
      .subscribe(
        (response) => {
          this._userCookieService.loginUser(response);
          this._router.navigate(['/account']);
        },
        (error: any) => {
          this._snackBar.open(`${error.error.detail}`, 'Error', {
            duration: 2000,
            panelClass: ['warning'],
          });
        }
      )
      .add(() => {
        this.loggingIn = false;
      });
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
