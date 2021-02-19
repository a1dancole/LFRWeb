import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { concatMap, delay, retryWhen } from 'rxjs/operators';
import { JwtAuthenticationService } from './jwtAuthentication.service';

@Injectable({ providedIn: 'root' })
export class JwtAuthenticationInterceptor implements HttpInterceptor {
  private retryCount = 1;

  constructor(private _jwtAuthenticationService: JwtAuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('settings.json')) {
      return next.handle(req);
    }

    return next.handle(req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._jwtAuthenticationService.getToken()}`,
      },
    })).pipe(retryWhen(error => {
      return error.pipe(concatMap((error, count) => {
        if (count <= this.retryCount && error.status === 401) {
          this._jwtAuthenticationService.login();
          return of(error);
        }
        return throwError(error);
      }), delay(1000));
    }))
  }
}
