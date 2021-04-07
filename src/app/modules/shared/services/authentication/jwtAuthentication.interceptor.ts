import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { concatMap, map, retryWhen, switchMap } from 'rxjs/operators';
import { JwtAuthenticationService } from './jwtAuthentication.service';

@Injectable({ providedIn: 'root' })
export class JwtAuthenticationInterceptor implements HttpInterceptor {
  private retryCount = 1;

  constructor(private _jwtAuthenticationService: JwtAuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
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
                return this._jwtAuthenticationService.login().pipe(
                  switchMap((response) => {
                    return this.handle401Error(req, next);
                  })
                );
              }
              return throwError(error);
            })
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
