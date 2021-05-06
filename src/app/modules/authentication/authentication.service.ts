import { Injectable } from "@angular/core";
import { Observable, pipe } from "rxjs";
import { catchError } from 'rxjs/operators'
import { BaseHttpClient } from "../shared/services/baseHttpClient.service";
import { Login } from "./models/login";
import { Register } from "./models/register"
import { UserProfile } from "../shared/models/userprofile";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthenticationService extends BaseHttpClient {

  public register(register: Register): Observable<Register> {
    return this._httpClient.post<Register>(`${environment.apiUrl}/account/register`, register);
  }

  public checkDuplicateUsername(userName: string) : Observable<boolean> {
    return this.get<boolean>(`${environment.apiUrl}/account/checkduplicateusername?userName=${userName}`);
  }

  public login(login: Login): Observable<UserProfile> {
    return this._httpClient.post<UserProfile>(`${environment.apiUrl}/account/login`, login);
  }
}
