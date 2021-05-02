import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AuthorizedOrder } from "../../shared/models/authorizedOrder";
import { BaseHttpClient } from "../../shared/services/baseHttpClient.service";
import { CharacterService } from "../generic-paypal-dialog/generic-paypal-dialog-data";

@Injectable()
export class StoreService extends BaseHttpClient {

  public processOrder(authorizedOrder: AuthorizedOrder): Observable<boolean> {
    return this._httpClient.post<boolean>(`${this._settingsService.settings.apiUrl}/store/processorder`, authorizedOrder);
  }

  public processCharacterService(characterName: string, characterService: CharacterService) {
    switch(characterService) {
      case CharacterService.NameChange: {
        return this._httpClient.post<boolean>(`${this._settingsService.settings.apiUrl}/store/namechange/${characterName}`, {});
      }
      case CharacterService.FactionChange: {
        return this._httpClient.post<boolean>(`${this._settingsService.settings.apiUrl}/store/factionchange/${characterName}`, {});
      }
      case CharacterService.RaceChange: {
        return this._httpClient.post<boolean>(`${this._settingsService.settings.apiUrl}/store/racechange/${characterName}`, {});
      }
      default:
        return of(false);
    }
  }

}
