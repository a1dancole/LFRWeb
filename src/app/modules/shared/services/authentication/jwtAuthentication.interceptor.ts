import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { time } from 'console';
import { Observable, of, throwError, timer } from 'rxjs';
import { catchError, concatMap, delay, mergeMap, retry, retryWhen, take } from 'rxjs/operators';
import { JwtAuthenticationService } from './jwtAuthentication.service';

@Injectable({ providedIn: 'root' })
export class JwtAuthenticationInterceptor implements HttpInterceptor {

  private retryCount = 3;

  constructor(private _jwtAuthenticationService: JwtAuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('settings.json')) {
      return next.handle(req);
    }

    var token = this._jwtAuthenticationService.getToken();

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(req).pipe(retryWhen(error => {
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
