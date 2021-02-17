import { NgModule } from '@angular/core';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from './authentication.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    AuthenticationService
  ],
  imports: [SharedModule],
})
export class AuthenticationModule {}
