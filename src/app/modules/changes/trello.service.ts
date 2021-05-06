import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrelloCard } from '../shared/models/trelloCard';

@Injectable()
export class TrelloService {
  constructor(
    private _httpClient: HttpClient
  ) {}

  public GetCardsInList(listId: string): Observable<TrelloCard[]> {
    return this._httpClient.get<TrelloCard[]>(
      `https://api.trello.com/1/lists/${listId}/cards?key=${environment.trelloAccessKey}&token=${environment.trelloAccessToken}`
    );
  }
}
