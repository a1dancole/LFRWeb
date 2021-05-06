import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseHttpClient } from "../shared/services/baseHttpClient.service";
import { ChangePassword } from "./models/changePassword";
import { CharacterUnstuck } from "./models/characterUnstuck";

@Injectable()
export class AccountService extends BaseHttpClient {

  public changePassword(changePassword: ChangePassword): Observable<boolean> {
    return this._httpClient.post<boolean>(`${environment.apiUrl}/account/changepassword`, changePassword);
  }

  public characterUnstuck(characterUnstuck: CharacterUnstuck) {
    return this._httpClient.post<boolean>(`${environment.apiUrl}/account/characterunstuck`, characterUnstuck)
  }
}
