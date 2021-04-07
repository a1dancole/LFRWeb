import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseHttpClient } from "../shared/services/baseHttpClient.service";
import { ChangePassword } from "./models/changePassword";
import { CharacterUnstuck } from "./models/characterUnstuck";

@Injectable()
export class AccountService extends BaseHttpClient {

  public changePassword(changePassword: ChangePassword): Observable<boolean> {
    return this._httpClient.post<boolean>(`${this._settingsService.settings.apiUrl}/account/changepassword`, changePassword);
  }

  public characterUnstuck(characterUnstuck: CharacterUnstuck) {
    return this._httpClient.post<boolean>(`${this._settingsService.settings.apiUrl}/account/characterunstuck`, characterUnstuck)
  }
}
