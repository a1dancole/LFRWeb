import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrelloCard } from '../shared/models/trelloCard';
import { SettingsService } from '../shared/services/settings.service';

@Injectable()
export class TrelloService {
  constructor(
    private _httpClient: HttpClient,
    private _settingsService: SettingsService
  ) {}

  public GetCardsInList(listId: string): Observable<TrelloCard[]> {
    return this._httpClient.get<TrelloCard[]>(
      `https://api.trello.com/1/lists/${listId}/cards?key=${this._settingsService.settings.trelloAccessKey}&token=${this._settingsService.settings.trelloAccessToken}`
    );
  }
}
