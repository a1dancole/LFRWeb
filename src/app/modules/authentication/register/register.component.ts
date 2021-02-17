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
    private _srp6Service: SRP6Service,
    private _snackBar: MatSnackBar
  ) {}

  public form!: FormGroup;

  public duplicateNickName: boolean = false;
  public duplicateUserName: boolean = false;
  public duplicateEmail: boolean = false;

  async ngOnInit() {
    this.form = this._formBuilder.group({
      nickName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public async register() {
    let nickName = this.form.get('nickName')?.value;
    let userName = this.form.get('userName')?.value;
    let password = this.form.get('password')?.value;
    let email = this.form.get('email')?.value;

    if (!(!!nickName && !!userName && !!password && !!email)) {
      return;
    }

    let generatedSrp6: GeneratedSrp6 = this._srp6Service.GetSRP6RegistrationData(
      userName,
      password
    );

    let registerModel: Register = {
      nickName: nickName,
      userName: userName,
      email: email,
      salt: generatedSrp6.salt.toString(),
      verifier: generatedSrp6.verifier.toString(),
    };

    this._authenticationService
      .register(registerModel)
      .subscribe(response => {
        this._snackBar.open(`Account ${response.userName} created`, undefined, {
          duration: 2000,
        })
      }, (error: any) => {
        this._snackBar.open(`${error.error.detail}`, 'Error', { duration: 2000, panelClass:['warning'] })
      });
  }
}
