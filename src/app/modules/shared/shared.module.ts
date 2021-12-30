import { ModuleWithProviders, NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtAuthenticationInterceptor } from './services/authentication/jwtAuthentication.interceptor';
import { JwtAuthenticationService } from './services/authentication/jwtAuthentication.service';
import { CookieService } from 'ngx-cookie-service';
import { UserGuard } from './guards/user.guard';
import { MinuteSecondsPipe } from './pipes/minuteSeconds.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    ComponentsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatBottomSheetModule
  ],
  providers: [
    JwtAuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtAuthenticationInterceptor,
      multi: true,
    },
    CookieService,
    UserGuard
  ],
  declarations: [
    MinuteSecondsPipe,
    SafePipe
  ],
  exports: [
    ComponentsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MinuteSecondsPipe,
    SafePipe,
    MatBottomSheetModule
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        JwtAuthenticationService
      ]
    };
  }
}
