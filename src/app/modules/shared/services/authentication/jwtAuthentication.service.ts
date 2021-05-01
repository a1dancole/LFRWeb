import { Injectable } from '@angular/core';
import { BaseHttpClient } from '../baseHttpClient.service';
import { map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class JwtAuthenticationService extends BaseHttpClient {
  private readonly key: string = 'token';

  public logout(): void {
    localStorage.removeItem(this.key);
  }

  public authenticate() {
    let key = Buffer.from(
      `${this._settingsService.settings.applicationName}:${this._settingsService.settings.wpaSecret}`
    ).toString('base64');

    return this.get(
      `${this._settingsService.settings.apiUrl}/authentication/authenticate?key=${key}`,
      { responseType: 'text' }
    ).pipe(
      map((jwt) => {
        localStorage.setItem(this.key, jwt);
      })
    );
  }

  public getToken(): string | null {
    return localStorage.getItem(this.key);
  }
}
