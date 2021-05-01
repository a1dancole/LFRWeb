import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap, map, retryWhen, switchMap } from 'rxjs/operators';
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

    return next.handle(req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._jwtAuthenticationService.getToken()}`,
      },
    })).pipe(catchError((response: HttpResponse<any>) => {
      if(response && response.status === 401) {
        return this._jwtAuthenticationService.authenticate().pipe(switchMap(() => {
          return this.handle401Error(req, next)
        }))
      }

      return throwError(response);
    }))
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
