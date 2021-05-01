import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthorizedOrder } from "../shared/models/authorizedOrder";
import { BaseHttpClient } from "../shared/services/baseHttpClient.service";

@Injectable()
export class StoreService extends BaseHttpClient {

  public processOrder(authorizedOrder: AuthorizedOrder): Observable<boolean> {
    return this._httpClient.post<boolean>(`${this._settingsService.settings.apiUrl}/store/processorder`, authorizedOrder);
  }

}
