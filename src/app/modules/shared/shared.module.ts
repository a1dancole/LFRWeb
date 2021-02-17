import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SettingsService } from './services/settings.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtAuthenticationInterceptor } from './services/authentication/jwtAuthentication.interceptor';
import { JwtAuthenticationService } from './services/authentication/jwtAuthentication.service';

export function initApp(settingsService: SettingsService) {
  return () => settingsService.initialise();
}

@NgModule({
  imports: [
    ComponentsModule,
    MatInputModule,
    CommonModule,
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
    }
  ],
  exports: [
    ComponentsModule,
    MatInputModule,
    CommonModule,
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
