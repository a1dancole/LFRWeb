import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthorizedOrder } from "../../shared/models/authorizedOrder";
import { GoldOrder } from "../../shared/models/goldOrder";
import { BaseHttpClient } from "../../shared/services/baseHttpClient.service";
import { CharacterService } from "../generic-paypal-dialog/generic-paypal-dialog-data";

@Injectable()
export class StoreService extends BaseHttpClient {

  public processOrder(authorizedOrder: AuthorizedOrder): Observable<boolean> {
    return this._httpClient.post<boolean>(`${environment.apiUrl}/store/processorder`, authorizedOrder);
  }

  public processCharacterService(characterName: string, characterService: CharacterService) {
    switch(characterService) {
      case CharacterService.NameChange: {
        return this._httpClient.post<boolean>(`${environment.apiUrl}/store/namechange/${characterName}`, {});
      }
      case CharacterService.FactionChange: {
        return this._httpClient.post<boolean>(`${environment.apiUrl}/store/factionchange/${characterName}`, {});
      }
      case CharacterService.RaceChange: {
        return this._httpClient.post<boolean>(`${environment.apiUrl}/store/racechange/${characterName}`, {});
      }
      case CharacterService.CharacterBoost: {
        return this._httpClient.post<boolean>(`${environment.apiUrl}/store/characterboost/${characterName}`, {});
      }
      default:
        return of(false);
    }
  }

  public processGold(order: GoldOrder): Observable<boolean> {
    return this._httpClient.post<boolean>(`${environment.apiUrl}/store/processgold`, order);
  }

}
