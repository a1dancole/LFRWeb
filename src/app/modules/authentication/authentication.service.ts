import { Injectable } from "@angular/core";
import { Observable, pipe } from "rxjs";
import { catchError } from 'rxjs/operators'
import { BaseHttpClient } from "../shared/services/baseHttpClient.service";
import { Register } from "./models/register"

@Injectable()
export class AuthenticationService extends BaseHttpClient {

  public register(register: Register): Observable<Register> {
    return this._httpClient.post<Register>(`${this._settingsService.settings.apiUrl}/account/register`, register);
  }

  public checkDuplicateUsername(userName: string) : Observable<boolean> {
    return this.get<boolean>(`${this._settingsService.settings.apiUrl}/account/checkduplicateusername?userName=${userName}`);
  }
}
