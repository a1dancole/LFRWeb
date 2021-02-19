import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtAuthenticationService } from './jwtAuthentication.service';
import { Observable, of, throwError, timer } from 'rxjs';
import {
  catchError,
  concatMap,
  delay,
  mergeMap,
  retry,
  retryWhen,
  switchMap,
  take,
} from 'rxjs/operators';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  private retryCount = 1;

  isRefreshingToken: boolean = false;

  constructor(private _jwtAuthenticationService: JwtAuthenticationService) {}

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('settings.json')) {
      return next.handle(req);
    }

    return next
      .handle(
        req.clone({
          setHeaders: {
            Authorization: `Bearer ${this._jwtAuthenticationService.getToken()}`,
          },
        })
      )
      .pipe(
        retryWhen((error) => {
          return error.pipe(
            concatMap((error, count) => {
              if (count <= this.retryCount && error.status === 401) {
                return this.handle401Error(req, next);
              }
              return throwError(error);
            }),
            delay(1000)
          );
        })
      );
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(
      req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._jwtAuthenticationService.getToken()}`,
        },
      })
    );
  }
}
