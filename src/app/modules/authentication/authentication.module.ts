import { NgModule } from '@angular/core';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { EncryptionDialogComponent } from './register/dialogs/encryption.dialog.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [RegisterComponent, EncryptionDialogComponent, LoginComponent],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    AuthenticationService
  ],
  imports: [SharedModule],
})
export class AuthenticationModule {}
