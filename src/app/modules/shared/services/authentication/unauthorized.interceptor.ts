// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable, throwError } from "rxjs";
// import { catchError, concatMap, map, mergeMap, retryWhen, take } from 'rxjs/operators'
// import { JwtAuthenticationService } from "./jwtAuthentication.service";

// @Injectable()
// export class UnauthorizedInterceptor implements HttpInterceptor {
//   constructor(private _jwtAuthenticationService: JwtAuthenticationService) {
//   }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return this._jwtAuthenticationService.getToken().pipe(
//       map(token => req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })),
//       concatMap(authReq => next.handle(authReq)),
//       retryWhen((errors: Observable<any>) => errors.pipe(
//         mergeMap((error, index) => {
//           // any other error than 401 with {error: 'invalid_grant'} should be ignored by this retryWhen
//           if (error.status !== 401) {
//             return throwError(error);
//           }

//           if (index === 0) {
//             // first time execute refresh token logic...
//             this._jwtAuthenticationService.login();
//           }

//           this._jwtAuthenticationService.login();
//           return throwError(error);
//         }),
//         take(2)
//         // first request should refresh token and retry,
//         // if there's still an error the second time is the last time and should navigate to login
//       )),
//     );
// }
// }
