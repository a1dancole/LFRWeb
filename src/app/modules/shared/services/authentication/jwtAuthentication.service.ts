import { Injectable } from '@angular/core';
import { BaseHttpClient } from '../baseHttpClient.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class JwtAuthenticationService extends BaseHttpClient {
  private readonly key: string = 'token';

  public logout(): void {
    localStorage.removeItem(this.key);
  }

  public authenticate() {
    let key = Buffer.from(
      `${environment.applicationName}:${environment.wpaSecret}`
    ).toString('base64');

    return this.get(
      `${environment.apiUrl}/authentication/authenticate?key=${key}`,
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
