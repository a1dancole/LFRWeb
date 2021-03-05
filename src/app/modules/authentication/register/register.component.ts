import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { buffer } from 'rxjs/operators';
import { GeneratedSrp6 } from '../../shared/models/GeneratedSrp6';
import { SRP6Service } from '../../shared/services/authentication/srp6.service';
import { AuthenticationService } from '../authentication.service';
import { Register } from '../models/register';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar
  ) {}

  public form!: FormGroup;

  public duplicateNickName: boolean = false;
  public duplicateUserName: boolean = false;
  public duplicateEmail: boolean = false;

  async ngOnInit() {
    this.form = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  public async register() {
    let userName = this.form.get('userName')?.value;
    let password = this.form.get('password')?.value;
    let confirmPassword = this.form.get('confirmPassword')?.value;

    if (!(!!userName || !!password || !!confirmPassword)) {
      return;
    }

    if(password != confirmPassword){
      this._snackBar.open(`Password's do not match`, 'Error', { duration: 2000, panelClass:['warning'] })
      return;
    }
    let registerModel: Register = {
      userName: userName,
      password: password
    };

    this._authenticationService
      .register(registerModel)
      .subscribe(response => {
        this._snackBar.open(`Account ${registerModel.userName} created`, undefined, {
          duration: 2000,
        })
      }, (error: any) => {
        console.log(error);
        this._snackBar.open(`${error.error.detail}`, 'Error', { duration: 2000, panelClass:['warning'] })
      });
  }
}
