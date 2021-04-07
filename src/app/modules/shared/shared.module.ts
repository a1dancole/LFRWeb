import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SettingsService } from './services/settings.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtAuthenticationInterceptor } from './services/authentication/jwtAuthentication.interceptor';
import { JwtAuthenticationService } from './services/authentication/jwtAuthentication.service';
import { UnauthorizedInterceptor } from './services/authentication/unauthorized.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { UserGuard } from './guards/user.guard';

export function initApp(settingsService: SettingsService) {
  return (): Promise<void> => { return settingsService.initialise() };
}

@NgModule({
  imports: [
    ComponentsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    JwtAuthenticationService,
    SettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [SettingsService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtAuthenticationInterceptor,
      multi: true,
    },
    CookieService,
    UserGuard
  ],
  exports: [
    ComponentsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        SettingsService,
        JwtAuthenticationService
      ]
    };
  }
}
